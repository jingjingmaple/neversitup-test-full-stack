function findOddInteger(input: number[]): number | null {
    const itemCount: { [key: number]: number } = {}

    for (const item of input) {
        if (item in itemCount) {
            itemCount[item] += 1
        } else {
            itemCount[item] = 1
        }
    }

    for (const [key, value] of Object.entries(itemCount)) {
        const isOddNumber = value % 2 !== 0
        if (isOddNumber) return parseInt(key)
    }

    return null
}

console.log(findOddInteger([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
