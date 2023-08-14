const uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    if (m === 0) return 0;
    let n = obstacleGrid[0].length;
    let dp = [...new Array(m)].map(() => new Array(n).fill(-1))
    
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (obstacleGrid[i][j] === 1) dp[i][j] = 0;
            else if (i === 0 && j === 0) dp[i][j] = 1;
            else {

                let left = 0;
                let up = 0;

                if (i > 0) up = dp[i - 1][j];
                if (j > 0) left = dp[i][j - 1];

                dp[i][j] = up + left;
            }
        }
    }

    return dp[m - 1][n - 1];
};

let obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];

console.log(uniquePathsWithObstacles(obstacleGrid));


/**
 * def searchMaze(arr, n):
    # Write your code here.
    ans = []
    # is_visited = [[0]*n]*n
    is_visited = [ [ 0 for i in range(n) ] for j in range(n) ]
    path = ''
    if arr[0][0] == 0:
        return ans
    
    ans = solve(0, 0, arr, n, ans, is_visited, path)
    return ans

def solve(x, y, arr, n, ans, vis, path):
    # base condition
    if x == n-1 and y == n-1:
        print('b')
        ans.append(path)
        return ans
    
    vis[x][y] = 1

    # Down
    if isSafe(x+1, y, vis, arr, n):
        ans = solve(x+1, y, arr, n, ans, vis, path +'D')
        
    # Left
    if isSafe(x, y-1, vis, arr, n):
        ans = solve(x, y-1, arr, n, ans, vis, path +'L')
        
    # Right
    if isSafe(x, y+1, vis, arr, n):
        ans = solve(x, y+1, arr, n, ans, vis, path +'R')
    
    # Up
    if isSafe(x-1, y, vis, arr, n):
        ans = solve(x-1, y, arr, n, ans, vis, path +'U')
        
    vis[x][y] = 0

    return ans

def isSafe(new_x, new_y, visited, arr, n):
    if (new_x >= 0 and new_x < n) and (new_y >= 0 and new_y < n) and visited[new_x][new_y] != 1 and arr[new_x][new_y] == 1:
        return True
    else:
        return False
    
maze = [ [1, 0, 0, 0], [1, 1, 0, 0], [1, 1, 0, 0], [0, 1, 1, 1] ]
result = searchMaze(maze, 4)
print(result)





---------------------------------------------------------------------.




def nQueens(n):
    board = [[0 for j in range(n)] for i in range(n)]
    # board = [ [0, 0, 1, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 1, 0, 0] ]
    ans = []
    ans = solve(0, ans, board, n)
    return ans
    
def solve(col, ans, board, n):
    # base condition: when all col has been filled up
    if col == n:
        ans = getSolution(board, ans, n)
        return ans
    
    # solve one and others by recursion
    for row in range(n):
        if isSafe(row, col, board, n):
            # place queen if safe
            board[row][col] = 1
            ans = solve(col+1, ans, board, n)
            # backtrack
            board[row][col] = 0
    
    return ans

def isSafe(row, col, board, n):
    # left side row check
    x = row
    y = col
    while (y>=0):
        # if found any queen on this <--- direction
        if board[x][y] == 1:
            return False
        y = y-1
            
    # diagonal check
    # left upper diagonal
    x = row
    y = col
    while(x>=0 and y>=0):
        if board[x][y] == 1:
            return False
        x = x-1
        y = y-1
        
    # left lower diagonal
    x = row
    y = col
    while(x<n and y>=0):
        if board[x][y] == 1:
            return False
        x = x+1
        y = y-1
        
    return True
    
def getSolution(board, ans , n):
    temp = []
    for i in range(n):
        for j in range(n):
            temp.append(board[i][j])
    
    ans.append(temp)
    return ans

result = nQueens(4)
print(result)


 */