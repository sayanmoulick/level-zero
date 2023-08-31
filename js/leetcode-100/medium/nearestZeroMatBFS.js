const nearestMatDist = (mat) => {

    // let directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];

    if (!mat || !mat.length || !mat[0].length) return [];

    let m = mat.length;
    let n = mat[0].length;
    let dp = [...new Array(m)].map(() => new Array(n).fill(-1));
    let q = [];

    for (let x = 0; x < m; x++){
        for (let y = 0; y < n; y++){
            if (mat[x][y] === 0) {
                dp[x][y] = 0;
                q.push([x, y]);
            } 
            /**
             * else {
             *       mat[i][j] = MAX_VALUE;
             *   }
             *
             */
        }
    }

    while (q.length) {
        let [i, j] = q.shift();

        if (isValid(i - 1, j, m, n) && dp[i - 1][j] === -1) {
            dp[i - 1][j] = dp[i][j] + 1;
            q.push([i-1, j]);
         }
        
        if (isValid(i, j - 1, m, n) && dp[i][j-1] === -1) {
            dp[i][j-1] = dp[i][j] + 1;
            q.push([i, j-1]);
         }
        
        if (isValid(i + 1, j, m, n) && dp[i+1][j] === -1) { 
            dp[i+1][j] = dp[i][j] + 1;
            q.push([i+1, j]);
        }
        
        if (isValid(i, j + 1, m, n) && dp[i][j+1] === -1) {
            dp[i][j+1] = dp[i][j] + 1;
            q.push([i, j+1]);
        }
        /*
        for (let [dr, dc] of directions) {
            let r = i + dr, c = j + dc;
            if (r >= 0 && r < m && c >= 0 && c < n && mat[r][c] > mat[i][j] + 1) {
                queue.push([r, c]);
                mat[r][c] = mat[i][j] + 1;
            }
        }
        */
    }

    return dp;
}

const isValid = (i, j, m, n) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return false;
    return true;
}

let matr = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

console.log(nearestMatDist(matr));
