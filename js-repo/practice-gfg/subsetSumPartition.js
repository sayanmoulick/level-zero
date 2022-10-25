// 0-1 Knapsack Problem
// Subset Sum Problem
// Equal Subset Sum Partition
// Longest Palindromic Substring
// Longest Increasing Subsequence
function isSubsetSum(arr,n,sum,dp)
{
    // Base Cases
    if (sum == 0)
        return true;
    if (n == 0 && sum != 0)
        return false;
 
    // return solved subproblem
    if (dp[n][sum] != -1) {
        return dp[n][sum];
    }
 
    // If last element is greater than sum, then
    // ignore it
    if (arr[n - 1] > sum)
        return isSubsetSum(arr, n - 1, sum, dp);
 
    /* else, check if sum can be obtained by any of
        the following
        (a) including the last element
        (b) excluding the last element
    */
    // also store the subproblem in dp matrix
    return dp[n][sum]
           = isSubsetSum(arr, n - 1, sum, dp)
             || isSubsetSum(arr, n - 1, sum - arr[n - 1], dp);
}

function findPartiion(arr, n)
{
    // Calculate sum of the elements in array
    let sum = 0;
    for (let i = 0; i < n; i++)
        sum += arr[i];
 
    // console.log(sum)

    // If sum is odd, there cannot be two subsets
    // with equal sum
    if (sum % 2 != 0)
        return false;
 
    // To store overlapping subproblems
    let dp = new Array(n + 1).fill(new Array(sum+1).fill(-1));
 
    // console.log(dp);

    // Find if there is subset with sum equal to
    // half of total sum
    return isSubsetSum(arr, n, sum / 2, dp);
}
 
// Driver code
// let arr = [ 3, 1, 5, 9, 12 ];
// let arr = [ 3, 1, 3];
let arr = [ 1, 5, 11, 5 ];
let n = arr.length;

if (findPartiion(arr, n) == true){
    console.log('yes')
}else {
    console.log('no')
}
