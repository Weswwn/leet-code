/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longestSubString = 1;
    var count = 1;
    var charChecker = 0;
    var objHolder = {};
    objHolder[s[charChecker]] = s[charChecker];

    if (s.length === 0) {
        return 0;
    } else if (s.length === 1) {
        return longestSubString;
    }

    for (var i = 0; i < s.length; i++) {
        if (i + 1 === s.length) {
            return longestSubString;
        }
        if (s[charChecker] !== s[i + 1] && !objHolder[s[i + 1]]) {
            objHolder[s[i+1]] = s[i+1];
            count++;
            if (count > longestSubString) {
                longestSubString = count;
            }
        } else {
            count = 1;
            charChecker++;
            objHolder = {};
            objHolder[s[charChecker]] = s[charChecker];
            i = charChecker - 1;
        }
    }
    return longestSubString;
};
