var swap = (matrix) => {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = matrix[0].length; x >= 0; x--) {
            if (x + 1 < matrix[0].length && y + 1 < matrix.length) {
                if (matrix[y][x] > matrix[y+1][x+1]) {
                    let temp = matrix[y][x];
                    matrix[y][x] = matrix[y+1][x+1];
                    matrix[y+1][x+1] = temp;
                }
            }
        }
    }
    return matrix;
}

console.log(swap([[2,5,7],[4,6,2],[1,3,6]]));
