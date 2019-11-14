/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length;
    let found = false;
    nums.sort((a,b) => {
        return a-b
    })
    console.log();
    while(found === false) {
         var middleIndex = Math.floor((start + end) / 2);
         console.log(middleIndex);
         if (start === end && nums[start] === target) {
             found = true;
             return start;
         } else if (start === end && nums[start] !== target) {
             found = true;
             return -1;
         }
        if (nums[middleIndex] > target) {
            start = 0;
            end = middleIndex - 1;
        } else if (nums[middleIndex] < target) {
            start = middleIndex + 1;
            // end = nums.length;
        } else if (nums[middleIndex] === target) {
            found = true;
            return middleIndex;
        }
    }
    return -1;
};

console.log(search([1,2,4,5,7,8], 8));