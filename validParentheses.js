/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let tracker = [];
    let stack = [];
    // let backwardStack = [];
    if (s.length === 1) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }  
    while (stack.length > 0) {
        let popped = stack.shift();
        if (popped === '[' || popped === '{' || popped === '(') {
            tracker.push(popped);
            continue;
        }
        if (popped === '}' && tracker[tracker.length - 1] !== '{') {
            return false;
        }
        if (popped === ']' && tracker[tracker.length - 1] !== '[') {
            return false;
        }
        if (popped === ')' && tracker[tracker.length - 1] !== '(') {
            return false;
        }
        tracker.pop();
    }
    if (tracker.length > 0) {
        return false;
    }
    return true;
};