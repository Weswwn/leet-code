/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var resultArray  = [];
    var objTracker = {};
    for (var i = 0; i < nums.length; i++) {
        for (var z = 1; z < nums.length; z++) {
            if (z !== i) {
                for (var y = 2; y < nums.length; y++) {
                    var tempArray = [];
                    if (y !== i && y !== z) {
                        if (nums[i] + nums[z] + nums[y] === 0) {
                            tempArray.push(nums[i], nums[y], nums[z]);
                            tempArray.sort();
                            if (!objTracker[tempArray]) {
                                objTracker[tempArray] = tempArray;
                                resultArray.push(tempArray);
                            }
                        }
                    }
                }
            }
        }
    }
    return resultArray;
};