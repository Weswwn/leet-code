/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let sCharTracker = {}
    for (let i = 0; i < s.length; i++) {
        if (!sCharTracker[s[i]]) {
            sCharTracker[s[i]] = 1;
        } else {
            sCharTracker[s[i]]++;
        }
    }
    
    let tCharTracker = {};
    for (let y = 0; y < t.length; y++) {
        if (!tCharTracker[t[y]]) {
            tCharTracker[t[y]] = 1;
        } else {
            tCharTracker[t[y]]++;
        }
    }
    
    for (let key in tCharTracker) {
        if (!sCharTracker[key]) {
            return false;
        }
        if (sCharTracker[key] !== tCharTracker[key]) {
            return false;
        }
    }
    return true;
};