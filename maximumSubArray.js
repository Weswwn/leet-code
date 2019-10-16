/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var largestValInNums = -Infinity;
    var startIndex = 0;
    var largestValIndex = 0;
    // Find the largest value and index in the nums array
    for (var i = 0; i< nums.length; i++) {
        if (nums[i] > largestValInNums) {
            largestValInNums = nums[i]
            largestValIndex = i;
        }
    }
    var firstHalfStartIndex = 0;
    var firstHalfEnd = largestValIndex;
    var largestSum = 0;
    var findLargestFirstHalf = (start) => {
        var tempSum = nums[start];
        for (var i = start + 1; i < firstHalfEnd; i++) {
            if (tempSum + nums[i] < 0) {
                start += 1;
                return findLargestFirstHalf(start)
            } else {
                tempSum += nums[i];
            }
        }
        if (tempSum > largestSum) {
            largestSum = tempSum;
            startIndex = start;
        } else {
            if (largestSum = 0) {
                startIndex = largestValIndex;
            }
        }
    }
    for (var z = firstHalfStartIndex; z < firstHalfEnd; z++) {
        if (nums[z] > 0) {
            firstHalfStartIndex = z;
            findLargestFirstHalf(firstHalfStartIndex);
        }
    }
    
};
console.log(maxSubArray([-2,1,-3,4,4,5,-1,2,1,-5,4]))