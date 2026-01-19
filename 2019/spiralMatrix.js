/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix) return [];
  if (matrix.length === 0) return [];
  let rowLength = matrix[0].length;
  let result = [];
  
  let rightBoundary = rowLength - 1;
  let leftBoundary = 0;
  let topBoundary = 0;
  let bottomBoundary = matrix.length - 1;
  
  while (result.length < (matrix[0].length * matrix.length)) {
      // Go through top array
      for (let i = topBoundary; i <= rightBoundary; i++) {
          result.push(matrix[topBoundary][i]);
      }
      topBoundary++;
      // Go through right column
      for (let j = topBoundary; j <= bottomBoundary; j++) {
          result.push(matrix[j][rightBoundary]);
      }
      rightBoundary--;
      //Go through bottom row
      for (let z = rightBoundary; z >= leftBoundary; z--) {
          result.push(matrix[bottomBoundary][z]);
      }
      bottomBoundary--;
      console.log(result);
      for (let y = bottomBoundary; y >= topBoundary; y--) {
          result.push(matrix[y][leftBoundary])
      }
      leftBoundary++;
  }
  return result.slice(0,(matrix[0].length * matrix.length));
};