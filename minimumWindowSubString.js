/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let L = 0;
  let R = 0;
  let count = 0;
  let obj = {};
  let result = '';
  let minLength = Infinity;
  t.split('').forEach(char => obj[char] = (obj[char] || 0) + 1);
  
  while (R < s.length) {
      if (obj[s[R]] || obj[s[R]] === 0) {
          obj[s[R]]--;
          if (obj[s[R]] === 0) {
              count++;
          }
      }
      R++;
      
      while (count === Object.keys(obj).length) {
          if (R - L < minLength) {
              minLength = R - L;
              result = s.substring(L, R);
          }
          
          if (obj[s[L]] || obj[s[L]] === 0) {
              obj[s[L]]++;
              if (obj[s[L]] > 0) {
                  count--;
              }
          }
          L++;
      }
  }
  return result;
};
console.log(minWindow('bbaa', 'aba'))