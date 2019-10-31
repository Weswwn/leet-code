/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pointer = 0;
    let firstZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            firstZeroIndex = i;
            pointer = i + 1;
            while (pointer < nums.length) {
                if (nums[pointer] !== 0) {
                    let temp = nums[i];
                    nums[i] = nums[pointer];
                    nums[pointer] = temp;
                    break;
                } else {
                    pointer++;
                }
                
            }
        }
    }
};