export function countSmileys(input: string[]): number {
    let result = 0

    const isSmilyFace = (face: string): boolean => {
        const regexSmilyPattern = /^(:|;){1}(-|~){0,1}(\)|D){1}$/g
        return regexSmilyPattern.test(face)
    }

    for (const item of input) {
        if (isSmilyFace(item)) result += 1
    }

    return result
}

// console.log(countSmileys([':)', ';(', ';}', ':-D']))
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']))
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))
