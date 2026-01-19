var longestSubArray = (arr) => {
    let maxSubArrayResult = 0;
    for (let i = 0; i < arr.length; i++) {
        let zeroCount = 0;
        let oneCount = 0;
        let subArrayLength = 1;
        if (arr[i] === 1) {
            zeroCount++;
        } else {
            oneCount++;
        }
        for (let y = i + 1; y < arr.length; y++) {
            subArrayLength++;
            if (arr[y] === 1) {
                zeroCount++;
            } else {
                oneCount++;
            }
            if (zeroCount === oneCount) {
                if (subArrayLength > maxSubArrayResult) {
                    maxSubArrayResult = subArrayLength;
                }
            }
        }
    }
    return maxSubArrayResult;
}

console.log(longestSubArray([0,1,1,1,0,0,0,1,1]));