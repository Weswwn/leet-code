/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;
    let longestCount = 0;
    
    let startPointer = 0;
    let endPointer = 0;
    if (s.length === 0) {
        return '';
    }
    for (let i = 0; i < s.length; i++) {
        let tempStart = i;
        let tempEnd = s.length - 1;
        let tempCount = 0;
        let endTracker = s.length - 1;
        while (tempStart <= tempEnd) {
            if (tempStart === tempEnd) {
                tempCount++;
                if (tempCount > longestCount) {
                    longestCount = tempCount;
                    start = startPointer;
                    end = endPointer;
                    break;
                }
                break;
            }
            if (s[tempStart] !== s[tempEnd]) {
                endTracker--;
                tempCount = 0;
                tempStart = i;
                startPointer = tempStart;
                tempEnd = endTracker;
                endPointer = tempEnd;
            } else {
                if (tempCount === 0) {
                    tempCount+= 2;
                    startPointer = tempStart;
                    endPointer = tempEnd;
                    tempStart++;
                    tempEnd--;
                } else {
                    tempCount+= 2;
                    tempStart++;
                    tempEnd--;
                }
                if (tempStart > tempEnd) {
                    if (tempCount > longestCount) {
                        longestCount = tempCount;
                        start = startPointer;
                        end = endPointer;
                    }
                }
            }
        }
    }
    let resultString = '';
    for (let i = start; i < end + 1; i++) {
        resultString += s[i];
    }
    return resultString;
};
console.log(longestPalindrome("aaabaaaa"));