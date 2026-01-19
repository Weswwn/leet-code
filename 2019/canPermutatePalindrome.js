/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let obj = {};
    for (var i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]]++;
        }
    }
    var totalOddCount = 0;
    for (var key in obj) {
        if (obj[key] % 2 !== 0) {
            totalOddCount++;
        }
    }
    if (totalOddCount >= 2) {
        return false;
    } else {
        return true;
    }
};

console.log(canPermutePalindrome('carerac'));