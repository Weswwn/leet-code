/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let obj = {};
    let result = Number.MAX_SAFE_INTEGER;
    let p1 = 0;
    let p2 = 0;
    for (let i = 0; i < t.length; i++) {
        if (!obj[t[i]]) {
            obj[t[i]] = 1;
        } else {
            obj[t[i]]++;
        }
    }
    let count = Object.keys(obj).length;
    let index = [];
    while (p2 < s.length) {
        if (obj.hasOwnProperty(s[p2])) {
            obj[s[p2]]--;
        }
        if (obj[s[p2]] === 0) {
            count--;
        }
        if (count === 0) {
            while (count === 0) {
                if ((p2 - p1 + 1) < result) {
                    result = p2 - p1 + 1;
                    index = [p1, p2];
                }
                if (obj.hasOwnProperty(s[p1])) {
                    obj[s[p1]]++;
                }
                if (obj[s[p1]] > 0) {
                    count++;
                }
                p1++;
            }
        }
        p2++;
    }
    let string = '';
    for (let i = index[0]; i <= index[1]; i++) {
        string += s[i];
    }
    return string;
};