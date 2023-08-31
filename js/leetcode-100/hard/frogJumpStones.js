const canCross = (stones) => {
    let n = stones.length;

    let dp = [...new Array(n)].map(() => new Array(n).fill(false));

    dp[0][0] = true;

    for (let i = 1; i < n; i++){
        for (j = i - 1; j >= 0; j--){
            let diff = stones[i] - stones[j];

            if (diff > j + 1) break;

            dp[i][diff] = dp[j][diff - 1] || dp[j][diff] || dp[j][diff + 1];

            if (i === n - 1 && dp[i][diff]) return true;
        }
    }

    return false;
}

// console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]));

console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]));
