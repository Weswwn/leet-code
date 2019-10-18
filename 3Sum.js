/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => {
        return a - b;
    })
    var obj = {};
    var resultArray = [];
    
    for (let i = 0; i < nums.length; i++) {
        let L = i + 1;
        let R = nums.length - 1;
        
        if (i > 0 && nums[i] == nums[i - 1]) {
			continue;
		}
        
        while(L < R) {
            if (nums[i] + nums[L] + nums[R] === 0) {
                var temp = [nums[i] , nums[L], nums[R]];
                temp.sort();
                if (!obj[temp]) {
                    obj[temp] = temp;
                    resultArray.push(temp);
                }
                L++;
                R--;
            }
            if (nums[i] + nums[L] + nums[R] > 0) {
                R--;
            }
            if (nums[i] + nums[L] + nums[R] < 0) {
                L++;
            }
        }
    }
    return resultArray;
}; 