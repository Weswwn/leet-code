/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase().split(/\W+/);
  let cleanArray = [];
  let max = Number.MIN_SAFE_INTEGER
  let word = '';
  let bannedObj = {};
  let cleanObj = {};
  paragraph = paragraph.filter(word => word !== '');
  
  banned.forEach(word => !bannedObj[word] ? bannedObj[word] = word : null)
  for (let i = 0; i < paragraph.length;i ++) {
      if (!bannedObj[paragraph[i]]) {
          cleanArray.push(paragraph[i]);
      }
  }
  for (let i = 0; i < cleanArray.length; i++) {
      if (!cleanObj[cleanArray[i]]) {
          cleanObj[cleanArray[i]] = 1;
          if (cleanObj[cleanArray[i]] > max) {
              word = cleanArray[i]
              max = cleanObj[cleanArray[i]];
          }
      } else {
          cleanObj[cleanArray[i]]++;
          if (cleanObj[cleanArray[i]] > max) {
              word = cleanArray[i]
              max = cleanObj[cleanArray[i]];
          }
      }
  }
  return word;
};