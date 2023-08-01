// const s1 = 'eat';
// const s2 = 'sea';

const s1 = 'delete';
const s2 = 'leet';

/*
  j ->
i   s   e   a   -
e |231|116|217|314|
a |332|217|116|213|
t |429|314|213|116|
- |115|101| 97| 0 |

*/

const asciiDeleteSum = (s1, s2) => {
  // ERROR
  // const dp = new Array([s1.length + 1][s2.length + 1]);

  // CORRECT
  const dp = [...new Array(s1.length + 1)].map(() =>
    new Array(s2.length + 1).fill(0)
  );

  console.log(dp);
  // bottom-up dynamic programming to solve the cost
  for (let i = dp.length - 1; i >= 0; i--) {
    for (let j = dp[0].length - 1; j >= 0; j--) {
      if (i === dp.length - 1 && j === dp[0].length - 1) {
        continue;
      } else if (i === dp.length - 1) {
        // ASCII of j pointed + value of last j cell i.e, j+1

        dp[i][j] = s2.charCodeAt(j) + dp[i][j + 1];
      } else if (j === dp[0].length - 1) {
        // ASCII of i pointed + value of last i cell i.e, i+1

        dp[i][j] = s1.charCodeAt(i) + dp[i + 1][j];
      } else {
        if (s1.charCodeAt(i) === s2.charCodeAt(j)) {
          // set diagonal value
          dp[i][j] = dp[i + 1][j + 1];
        } else {
          dp[i][j] = Math.min(
            s1.charCodeAt(i) + dp[i + 1][j],
            s2.charCodeAt(j) + dp[i][j + 1]
          );
        }
      }
    }
  }
  console.log(dp[0][0]);
  return dp[0][0];
};

asciiDeleteSum(s1, s2);
