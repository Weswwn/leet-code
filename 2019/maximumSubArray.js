/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let p1 = 0;
    let p2 = 0;
    let max = -Infinity;
    if (!nums) return 0;
    let curr = 0
    if (nums.length === 1) return nums[0];
    while (p2 < nums.length) {
        if (curr + nums[p2] < nums[p2]) {
            p1 = p2;
            curr = 0;
        } else {
            curr += nums[p2];
            max = Math.max(max, curr);
            p2++;
        }
    }
    return max;
};