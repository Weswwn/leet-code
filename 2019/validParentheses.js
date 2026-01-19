/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
            continue;
        }
        if ((s[i] === ')' || s[i] === ']' || s[i] === '}') && stack.length === 0) {
            return false;
        }
        if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (s[i] === ')' && stack[stack.length - 1] !== '(') {
            return false;
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length - 1] !== '[') {
            return false;
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length - 1] !== '{') {
            return false;
        }
    }
    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
};