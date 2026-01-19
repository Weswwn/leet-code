/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
  let distanceCount = 0;
  let endPointer = i + 1;
  let endIndex = endPointer;
  validSolution = false;

  while (endPointer < height.length) {
    if (height[endPointer] > height[i]) {
      if (distanceCount === 0) {
        break;
      } else {
        endIndex = endPointer;
        validSolution = true;
        break;
      }
    }
    if (height[endPointer] < height[i]) {
      if ((endPointer + 1 ) < height.length) {
        if (height[endPointer] >= height[endIndex]) {
          distanceCount++;
          endIndex = endPointer;
          endPointer++;
        } else {
          distanceCount++;
          endPointer++;
        }
        continue;
      } else {
        if (height[endPointer] >= height[endIndex]) {
          endIndex = endPointer;
        }
          if (height[endIndex] > 0) {
              validSolution = true;
              break;
          }
        break;
      }
    }
    if (height[endPointer] === height[i]) {
      if (distanceCount === 0) {
        break;
      }
      if (distanceCount > 0) {
        validSolution = true;
        endIndex = endPointer;
        break;
      }
    }
  }
  if (validSolution) {
    let total = Math.min(height[i], height[endIndex]) * ((endIndex - i) - 1);
    for (let y = i + 1; y < endIndex; y++) {
      total -= height[y];
    }
    totalWater += total;
    i = endIndex - 1;
  }
  }
  return totalWater;
};

console.log(trap([4,2,3]));