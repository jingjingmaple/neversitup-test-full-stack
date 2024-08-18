function removeDuplicate(input: string[]) {
  const init: string[] = [];
  const uniqueArray = input.reduce((result, current) => {
    if (!result.includes(current)) {
      result.push(current);
    }
    return result;
  }, init);
  return uniqueArray;
}

function permutation(input: string): string[] {
  const result: string[] = [];
  console.log("input", input.length);

  for (let i = 0; i < input.length; i++) {
    const inputChar = input.split("");
    console.log("inputchar", inputChar, "i", i);
    const currentChar = inputChar[i];
    inputChar.splice(i, 1);
    console.log("after splice take out", inputChar);
    const remainingCharLength = inputChar.length;

    // Insert to between char
    for (let k = 0; k <= remainingCharLength; k++) {
      const newArr = [...inputChar];
      console.log("newArr", newArr, "inputchar", inputChar);
      console.log("i", i, "k", k);
      newArr.splice(k, 0, currentChar);

      const newWord = newArr.join("");
      console.log("newWord", newWord);
      result.push(newWord);
      console.log("    >>>>>>>>>>>>>>>>>>>>>>>");
    }
    console.log("===================================");
  }
  console.log("result", result);
  const uniqueAnswer = removeDuplicate(result);

  return uniqueAnswer;
}

console.log(permutation("abc"));
