/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let p1 = 0;
  if (needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;
  for (let i = 0; i < haystack.length; i++) {
      if (needle[p1] === haystack[i]) {
          if (p1 === needle.length - 1) return p1;
          
          let target = needle.substring(p1 + 1, needle.length);

          let char = haystack.substring(i + 1, (i + 1) + needle.length - 1);
          
          if (target === char) {
              return i;
          }
      }
  }
  return -1;
};
