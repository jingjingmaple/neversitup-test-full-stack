import { findOddInteger } from './odd-number'

describe('Testing findOddInteger function', () => {
    test('Should have correct answer from prepared test case', () => {
        const testCases = [
            { input: [7], answer: 7 },
            { input: [0], answer: 0 },
            {
                input: [1, 1, 2],
                answer: 2,
            },
            {
                input: [0, 1, 0, 1, 0],
                answer: 0,
            },
        ]
        for (const testCase of testCases) {
            expect(findOddInteger(testCase.input)).toBe(testCase.answer)
        }
    })
})
