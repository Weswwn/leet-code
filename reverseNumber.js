/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let tempString = '';
    if (x < 0) {
        x = x.toString();
        console.log(x);
        for (var i = x.length - 1; i > 0; i--) {
            if (i === x.length - 1) {
                tempString += '-' + x[i];
            } else {
                tempString += x[i];
            }
        }
        return Number(tempString);
    } else {
        x = x.toString();
        for (var i = x.length - 1; i >= 0; i--) {
            tempString += x[i];
        }
        return Number(tempString);
    }
    
};

console.log(reverse(123));