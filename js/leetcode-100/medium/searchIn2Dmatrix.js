/*
const searchMatrix = (matrix, key) => {
    // console.log(matrix.length, matrix[0].length);

    let row = 0;
    let col = 0;
    let flag = false;

    if (key === matrix[0][0]) return true;

    for (let m = 1; m < matrix.length; m++){
        if (key === matrix[m][0]) {
            flag = true;
            break;
        }

        if ((key > matrix[m - 1][0]) &&( key < matrix[m][0])) {
            row = m - 1;
            col = matrix[m-1].length
            break;
        }
    }

    for (let n = 0; n < col; n++) {
        if (key === matrix[row][n]) {
            flag = true;
            break;
        }
    }

    return flag;
}
*/

var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    
    let row = 0;
    let col = matrix[0].length - 1;
    
    while(col >= 0 && row < matrix.length){
        if(target === matrix[row][col]) return true;
        else if(target > matrix[row][col]) row++;
        else if(target < matrix[row][col]) col--;
    }
    

    return false;
};

/*
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false;
    
    let row = matrix.length;
    let col = matrix[0].length;
    let start = 0, end = row * col - 1;
    while (start != end){
        let mid = (start + end - 1) >> 1;
        console.log(mid, mid / row, mid % row);
        if (matrix[Math.floor(mid / row)][mid % row] < target)
            start = mid + 1;
        else 
            end = mid;
    }
    return matrix[Math.floor(end / row)][end % row] === target;
};
*/

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
// const matrix= [[1]]
const target = 3;

console.log(searchMatrix(matrix, target));
