/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || nums.length === 0) return -1;
    if (nums.length === 1) {
        if (target === nums[0]) return 0;
        if (target !== nums[0]) return -1;
    }
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < nums[end]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    
    let minPoint = start;
    start = 0;
    end = nums.length - 1;
    if (target === nums[minPoint]) return minPoint
    
    if (target >= nums[minPoint] && target <= nums[end]) {
        start = minPoint;
    } else {
        end = minPoint - 1;
    }

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target === nums[mid]) return mid;
        if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return -1;
};