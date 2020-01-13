/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let p1 = 0;
  if (needle.length === 0) return 0;
  
  const helper = (p1, p2) => {
      console.log(p1, p2, needle[p1], haystack[p2]);
      if (p1 === needle.length - 1 && needle[p1] === haystack[p2]) {
          // console.log('check');
          return true;
      } else if (p1 === needle.length -1 && needle[p1] !== haystack[p2]) {
          console.log('check2');
          return false;
      }
      if (needle[p1] === haystack[p2]) {
          return helper(p1 + 1, p2 + 1);
      } else {
          return false;
      }
  }
  
  for (let i = 0; i < haystack.length; i++) {
      console.log(p1);
      if (needle[p1] === haystack[i]) {
          if (p1 === needle.length - 1) return p1;
          let ans = helper(p1 + 1, i + 1);
          console.log('ans', ans);
         if (helper(p1 + 1, i + 1) === false) {
             console.log('hi2')
             continue;
         } else {
             return i;
         }
      }
  }
  return -1;
};

console.log(strStr('aaa', 'aaaa'));