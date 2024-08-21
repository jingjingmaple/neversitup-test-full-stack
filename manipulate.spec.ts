import { permutation } from './manipulate'

const factorialCal = (num: number): number => {
    let result: number = 1

    for (let i = num; i >= 1; i--) {
        result = result * i
    }
    return result
}

describe('Testing permutation generator function', () => {
    test('Should have correct amount of answer in case every character is uniqued', () => {
        const inputSet = ['abc', 'ab']
        for (const input of inputSet) {
            const correctAnswer = factorialCal(input.length)
            expect(permutation(input).length).toBe(correctAnswer)
        }
    })
    test('Should have correct amount of answer in case there are duplicated character', () => {
        expect(permutation('aabb').length).toBe(6)
    })

    test('Should have correct answer from prepared test case', () => {
        const testCases = [
            { input: 'a', answer: ['a'] },
            { input: 'ab', answer: ['ab', 'ba'] },
            {
                input: 'abc',
                answer: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'],
            },
            {
                input: 'aabb',
                answer: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'],
            },
        ]
        for (const testCase of testCases) {
            expect(permutation(testCase.input).sort()).toEqual(
                testCase.answer.sort(),
            )
        }
    })
})
