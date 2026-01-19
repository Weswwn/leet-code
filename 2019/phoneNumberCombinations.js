/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let resultArray = [];
  let obj = {
            "2": ['a','b','c'],
            "3": ['d','e','f'],
            "4": ['g','h','i'],
            "5": ['j','k','l'],
            "6": ['m','n','o'],
            "7": ['p','q','r', 's'],
            "8": ['t','u','v'],
            "9": ['w','x','y', 'z'],
  }
  let recurse = (permutation, digitIndex) => {
      if (digitIndex > digits.length) return;
      if (permutation.length === digits.length) {
          resultArray.push(permutation);
          return;
      }
      for (let i = 0; i < obj[digits[digitIndex]].length; i++) {
          recurse(permutation + obj[digits[digitIndex]][i], digitIndex + 1);
      }
  }
  
  for (let j = 0; j < obj[digits[0]].length; j++) {
      recurse(obj[digits[0]][j], 1);
  }
  return resultArray;
};