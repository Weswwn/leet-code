/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let JTracker = {};
    let totalCount = 0;
  for (let i = 0; i < J.length; i++) {
      JTracker[J[i]] = 0;
  }
    
    for (let z = 0; z < S.length; z++) {
        if (JTracker.hasOwnProperty(S[z])) {
            totalCount++;
        }
    }
    return totalCount;
};