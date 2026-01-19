/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    if (!grid) {
        return 0;
    }
    if (grid.length === 0) {
        return 0;
    }
    var recurse = (x,y) => {
        if (x < 0 || x === grid.length || y < 0 || y === grid[0].length) {
            return;
        }
        if (grid[x][y] === true) {
            return;
        } else if (grid[x][y] !== '1') {
            return;
        }
        if (grid[x][y] === '1') {
            grid[x][y] = true;
            recurse(x - 1, y);
            recurse(x + 1, y);
            recurse(x, y - 1);
            recurse(x, y + 1);
            return 1;
        }
    }
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[x].length; y++) {
            if (grid[x][y] === '1') {
                islandCount += recurse(x,y);
            } else if (grid[x][y] === true) {
                continue;
            } else if (grid[x][y] === '0') {
                continue;
            }
        }
    }
    recurse(0,0);
    return islandCount;
};

console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))