// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function minimumHours(rows, columns, grid)
{
    // WRITE YOUR CODE HERE
    if(grid.length === 0) return 0;
    let queue = [], count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                queue.push([i, j]);
            }
        }
    }
    while (queue.length > 0) {
        let length = queue.length;
        for (let k = 0; k < length; k++) {
            let curr = queue.shift();
            let i = curr[0];
            let j = curr[1];
            if (i - 1 >= 0 && grid[i][j] === 0) {
                grid[i - 1][j] = 1;
                queue.push([i - 1, j]);
                console.log(queue);
            }
            if (j + 1 <= columns - 1 && grid[i][j + 1] === 0) {
                grid[i][j + 1] = 1;
                queue.push([i, j + 1])
            }
            if (i + 1 <= rows - 1 && grid[i+1][j] === 0) {
                grid[i+1][j] = 1;
                queue.push([i+1,j]);
            }
            if (j - 1 >= 0 && grid[i][j - 1] === 0) {
                grid[i][j - 1] = 1;
                queue.push([i, j - 1]);
            }
          }
          count++;
          console.log(grid)
    }
    return count;
}
console.log(minimumHours(5,5,[[1,0,0,0,0],[0,1,0,0,0], [0,0,1,0,0],[0,0,0,1,0],[0,0,0,0,1]]));
// FUNCTION SIGNATURE ENDS