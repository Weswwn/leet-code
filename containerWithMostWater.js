/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    for (let i = 0; i < height.length; i++) {
        let count = 1;
        for (let y = i + 1; y < height.length; y++) {
            if (height[y] > height[i]) {
                let waterArea = height[i] * count;
                if (waterArea > maxWater) {
                    maxWater = waterArea;
                    count++;
                } else {
                    count++;
                }
            } else {
                let waterArea = height[y] * count;
                if (waterArea > maxWater) {
                    maxWater = waterArea;
                    count++;
                } else {
                    count++;
                }
            }
        }
    }
    return maxWater;
};