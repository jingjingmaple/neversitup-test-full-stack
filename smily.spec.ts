import { countSmileys } from './smily'

describe('Testing countSmileys function', () => {
    test('Should return correct answer from specific test case', () => {
        expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2)
        expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3)
        expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
    })
    test('Should return 0 In case that the input not arranged correctly', () => {
        expect(countSmileys(['(:', ');', '{;', 'D-:'])).toBe(0)
        expect(countSmileys(['D;', '(-:'])).toBe(0)
    })
    test('Should return 0 In case having double eye, nose, or mouth', () => {
        expect(countSmileys([':))', ';;D', ':--D', ':-D)'])).toBe(0)
    })
})
