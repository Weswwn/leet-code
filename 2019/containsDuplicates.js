/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            return true;
        } else {
            obj[nums[i]] = nums[i];
        }
    }
    return false;
};

console.log(containsDuplicate([0,4,5,0,3,6]));
