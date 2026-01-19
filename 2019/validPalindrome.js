/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x;
    let reversedNum = 0;
    if (x < 0) {
        return false;
    }
    while (num) {
        reversedNum = (10 * reversedNum) + (num % 10)
        num = Math.floor(num / 10);
    }
    return (reversedNum === x);
};


// https://dpaste.de/369b

/*
function reverse(num) {
    let ret = 0;
    while (num) {
        ret = 10 * ret + num % 10;
        num = Math.floor(num / 10);
    }
    return ret;
}

function isPalindrome(x) {
    return x >= 0 && x === reverse(x);
}
*/