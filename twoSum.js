/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var elementTracker = {};
    for (var i = 0; i < nums.length; i++) {
        for (var y = 1; y < nums.length; y++) {
           if (!elementTracker.hasOwnProperty(nums[y].toString())) {
               if (nums[i] + nums[y] === target) {
                   return [i,y];
               }
           } else {
               elementTracker[nums[y]] = nums[y];
           }
        }
    }
};
console.log(twoSum([2,5,5,11], 10));