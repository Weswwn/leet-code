/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    if (s[0] === ']' || s[0] === '}' || s[0] === ')') {
        return false;
    }
    if (s.length === 0) {
        return true;
    }
    stack.push(s[0]);
    
    for (var i = 1; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
            continue;
        } else if (s[i] === '{') {
            stack.push(s[i]);
            continue;
        } else if (s[i] === '[') {
            stack.push(s[i]);
            continue;
        } 
        if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                console.log(stack[stack.length - 1])
                return false;
            }
        }
        if (s[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                // console.log(stack[stack.length - 1])
                return false;
            }
        }
        if (s[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                console.log(stack[stack.length - 1])
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;

};