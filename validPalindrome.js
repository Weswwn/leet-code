/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString();
    let left = 0;
    let right = xString.length - 1;
    let validPal = true;
    if (xString.length === 1) {
        return true;
    }
    console.log(xString[left], xString[right]);
    while (left < right) {
        if (xString[left] !== xString[right]){
            validPal = false;
            return validPal;
        }
        left++;
        right--;
    }
    return validPal;
};