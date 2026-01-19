let findPermutation = (str) => {
  let result = [];
  let permutate = (permutation, string) => {
    // console.log(string);
    if (permutation.length === 3) {
      result.push(permutation); 
      return;
    }
    for (let i = 0; i < string.length; i++) {
      // console.log(string);
      permutate(permutation + string[i], string.substring(0, i) + string.substring(i + 1, string.length));
    }
  }
  permutate('', str);
  return result;
}
console.log(findPermutation('abc'));