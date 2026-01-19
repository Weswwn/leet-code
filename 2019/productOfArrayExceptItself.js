/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftMultipleValue = 1;
    let leftMultipleArray = [];
    let resultArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (i - 1 < 0) {
            leftMultipleArray.push(1);
        } else {
            leftMultipleValue *= nums[i - 1];
            leftMultipleArray.push(leftMultipleValue);
        }
    }
    let rightMultipleValue = 1;
    let rightMultipleArray = [];
    for (let z = nums.length -  1; z >= 0; z--) {
        if (z + 1 === nums.length) {
            rightMultipleArray.push(1);
        } else {
            rightMultipleValue *= nums[z + 1];
            rightMultipleArray.push(rightMultipleValue);
        }
        console.log(rightMultipleArray);
    }
    var length = rightMultipleArray.length - 1;
    for (var y = 0; y < rightMultipleArray.length; y++) {
        resultArray.push(leftMultipleArray[y] * rightMultipleArray[length]);
        length--;

    }
    return resultArray;
};

console.log(productExceptSelf([1,2,3,4]));