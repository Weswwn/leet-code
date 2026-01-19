/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let resultArray = [];
    var recurse = (array) => {
        if (array.length === 3) {
            resultArray.push(array);
            return;
        }
        for (var i = 0; i < nums.length; i++) {
            if (!array.includes(nums[i])) {
                recurse(array.concat([nums[i]]));
            }
        } 
    }
    var array = [];
    recurse(array);
    return resultArray;
};
console.log(permute([1,2,3]));