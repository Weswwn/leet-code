/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    if (height.length === 1 || height.length === 0) {
        return 0
    }
    let L = 0;
    let R = height.length - 1;
    while (L < R) {
        let waterArea = Math.min(height[L], height[R]) * (R - L);
        if (waterArea > maxWater) {
            maxWater = waterArea;
        }
        if (Math.max(height[L], height[R]) === height[L]) {
            R--;
        } else {
            L++;
        }
    }
    return maxWater;
};