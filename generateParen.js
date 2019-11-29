/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let resultArray = [];
  let recurse = (permutation, openCount, closeCount) => {
      if (openCount > n || closeCount > openCount) return;
      if (openCount === n && closeCount === n) {
          resultArray.push(permutation);
      }
      recurse(permutation + '(', openCount + 1, closeCount);
      recurse(permutation + ')', openCount, closeCount + 1);
  }
  recurse('(' ,1 ,0)
  return resultArray;
};