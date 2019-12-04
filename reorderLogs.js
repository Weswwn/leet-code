/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let splitLogs = [];
  for (let i = 0; i < logs.length; i++) {
      splitLogs.push(logs[i].split(' '))
  }
  let letterLogArray = [];
  let digitLogArray = [];
  splitLogs.forEach(log => Number(log[1]) || Number(log[1]) === 0 ? digitLogArray.push(log) : letterLogArray.push(log));
  
  for(let i = 0; i < digitLogArray.length; i++) {
      digitLogArray[i] = digitLogArray[i].join(' ');
  }
  for(let i = 0; i < letterLogArray.length; i++) {
      letterLogArray[i] = letterLogArray[i].join(' ');
  }
  
  letterLogArray.sort((a,b) => {
      let ai = a.indexOf(' ');
      let bi = b.indexOf(' ');
      let lc = a.substring(ai+1).localeCompare(b.substring(bi+1));
      if (lc != 0) return lc 
      return a.substring(0,ai).localeCompare(b.substring(0,bi));
  })
  
  return [...letterLogArray,...digitLogArray]
};