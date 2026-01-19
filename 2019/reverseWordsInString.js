/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.replace(/\s+/g, ' ').trim()
  console.log('Trimmed' , s);
  let array = s.split(' ');
  
  let L = 0;
  let R = array.length - 1;

  while (L <= R) {
      let temp = array[L];
      array[L] = array[R];
      array[R] = temp;
      L++;
      R--;
  }
  let str = array.join(' ');
  return str;
};