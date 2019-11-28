let findAnagram = (str1, str2) => {
  let targetObj = {};
  let checkObj = {};
  let result = 0;
  let count = str1.length;

  for (let i = 0; i < str1.length; i++) {
    targetObj[str1[i]] = targetObj[str1[i]] || 0;
    checkObj[str1[i]] = 0;
    targetObj[str1[i]]++;
  }
  for (let i = 0; i < 4; i++) {
    if (checkObj.hasOwnProperty(str2[i])) {
      checkObj[str2[i]]++;
    }
    if (checkObj[str2[i]] === targetObj[str2[i]]) {
      count--;
    }
  }
  let L = 0;
  let R = L + str1.length - 1;
  while (R < str2.length) {
    R++;
    if (checkObj.hasOwnProperty([str2[R]])) {
      checkObj[str2[R]]++;
      if (checkObj[str2[R]] === targetObj[str2[R]]) {
        count--;
      }
    }
    if (checkObj.hasOwnProperty(str2[L])) {
      console.log(str2[L]);
      checkObj[str2[L]]--;
      if (checkObj[str2[L]] < targetObj[str2[R]]) {
        count++;
      }
    }
    L++;
    console.log(str2[L], str2[L + 1], str2[L + 2], str2[R]);
    if (count === 0) {
      result++;
    }
  }
  return result;
}
console.log(findAnagram('abbc', 'cabadcbbabbcbabaabccbabc'))