/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let queue = [];
    let charTracker = {};
    if (s.length === 0) {
        return -1;
    }
    for (let i = 0; i < s.length; i++) {
        queue.push(s[i]);
        if (!charTracker[s[i]]) {
            charTracker[s[i]] = [i,1];
        } else {
            charTracker[s[i]][1]++;
        }
    }
    while (queue.length > 0) {
        let poppedChar = queue.shift();
        if (charTracker[poppedChar][1] === 1) {
            return charTracker[poppedChar][0];
        }
    }
    return -1;
};