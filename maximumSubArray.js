/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxArraySum = nums[0];
    var subArraySum = nums[0];
    
    for (var i = 1; i < nums.length; i++) {
        if (subArraySum + nums[i] < nums[i]) {
            subArraySum = nums[i];
            maxArraySum = Math.max(subArraySum, maxArraySum);
        } else {  
            subArraySum += nums[i];
            maxArraySum = Math.max(subArraySum, maxArraySum);

            // if (subArraySum > maxArraySum) {
            //     maxArraySum = subArraySum;
            // }
        } 
    }
    return maxArraySum;
};

console.log(maxSubArray([-1,-2]));