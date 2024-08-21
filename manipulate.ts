function removeDuplicate(input: string[]) {
    const init: string[] = []
    const uniqueArray = input.reduce((result, current) => {
        if (!result.includes(current)) {
            result.push(current)
        }
        return result
    }, init)
    return uniqueArray
}

export function permutation(inputStr: string): string[] {
    const inputArray: string[] = inputStr.split('')
    let result: string[] = []

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray.length == 1) return inputArray

        const removedChar = inputArray.shift() as string
        const resultStack = permutation(inputArray.join(''))

        for (let y = 0; y < resultStack.length; y++) {
            resultStack[y] = `${resultStack[y]}${removedChar}`
        }
        result = result.concat(resultStack)
        inputArray.push(removedChar[0])
    }

    return removeDuplicate(result)
}
// console.log(permutation('abc'))
// console.log(permutation('aabb'))
console.log(permutation('ab'))
