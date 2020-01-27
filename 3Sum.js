/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b) => a - b);
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let p1 = i;
        let p2 = i + 1;
        let p3 = nums.length - 1;
        if (nums[i] === nums[ i - 1]) {
            continue;
        }
        while (p2 < p3) {
            if (nums[p1] + nums[p2] + nums[p3] === 0) {
                result.push([nums[p1], nums[p2], nums[p3]]);
                p2++;
                p3--;
                while (nums[p2] === nums[p2 - 1] && nums[p3] === nums[p3 + 1]) {
                    p2++;
                    p3--;
                }
            } else if (nums[p1] + nums[p2] + nums[p3] < 0) {
                p2++;
            } else if (nums[p1] + nums[p2] + nums[p3] > 0) {
                p3--;
            }
        }
    }
    return result;
};