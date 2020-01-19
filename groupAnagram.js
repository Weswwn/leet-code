/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let arr = [];
  let obj = {};
  for (let i = 0; i < strs.length; i++) {
      let curr = strs[i].split('');
      arr.push(curr);
  }
  
  arr = arr.map(word => word.sort((a,b) => a < b));
  arr = arr.map(word => word.join(''));
  
  arr.map((word, i) => {
      if (!obj[word]) {
          obj[word] = [strs[i]];
      } else {
          obj[word].push(strs[i]);
      }
  })
  let result = [];
  for (let key in obj) {
      result.push(obj[key]);
  }
  return result;
};