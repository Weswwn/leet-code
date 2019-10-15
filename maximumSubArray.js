/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //Create start and end pointers with 'end' one more than start
    //Create a largestSum tracker variable
    //Create a subArrayResult
    
    //currently whiteboarding....
    //Find largest number within array
    //Edge Case: How to handle multiple largest same number
    var resultArray = [];
    var largestNumber = -Infinity;
    var largestIndex = 0;
    var start = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > largestNumber) {
            largestNumber = nums[i];
            largestIndex = i;
        }
    }

    var firstHalfSum = 0;
    for (var y = start; y < largestIndex; y++) {
        if (firstHalfSum < 0) {
            start++;
            firstHalfSum = 0;
        } else {
            firstHalfSum += nums[y]
        }
    }
    if (firstHalfSum < 0) {
        start = largestIndex;
    }
    resultArray.push(start);

    //Need to loop through the entire second half and check if any subarray sums are greater than 0 
    var secondHalfSum = 0;
    var largestNum = -Infinity;
    var index = largestIndex;
    
    for (var z = largestIndex + 1; z < nums.length; z++) {
        if ((secondHalfSum += nums[z]) > largestNum) {
            console.log(secondHalfSum);
            largestNum = secondHalfSum;
            index = z;
        }
    }
    if (secondHalfSum > 0) {
        resultArray.push(index);
    }
    var result = nums[largestIndex];
   for (var a = resultArray[0]; a < resultArray[1] + 1; a++) {
       result += nums[a];
   }
   return result;
};

console.log(maxSubArray([-2, 1]));