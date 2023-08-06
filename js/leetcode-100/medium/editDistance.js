// let s1 = 'abc';
// let s2 = 'bcd';

/* https://www.youtube.com/watch?v=AuYujVj646Q Techdose
  s2 ->
s1  0   1   2   3
0 |0  |1  |2  |3  |
1 |1  |1  |2  |3  |
2 |2  |1  |2  |3  |
3 |3  |2  |1  |2  |

if ( s1.length === 0 ) dp[i][j] = j
else if (s2.length === 0) dp[i][j] = i
else if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1]

dp[i][j] = dp[i][j-1] + 1 <- to Insert
dp[i][j] = dp[i-1][j] + 1 <- to Delete
dp[i][j] = dp[i-1][j-1]  + 1 <- to Replace

note: +1 is the cost of I/D/R of one character

    Replace         | Delete
    \               |
      \             |
        \           |
          \         |
            \       |
              \     |
                \   |
    Insert        \ |
    -----------------
*/

const compute = () => {};

const editDistance = (s1, s2) => {
  let dp = [...new Array(s1.length + 1)].map(() =>
    new Array(s2.length + 1).fill(0)
  );

  console.log(dp);
};

const minOperationCost = (I, D, R) => {
  if (I <= D && I <= R) return I;
  else if (D <= I && D <= R) return D;
  else return R;
};

const editDistanceDp = (s1, s2) => {
  const m = s1.length;
  const n = s2.length;

  // ERROR
  //   let dp = new Array(m + 1).fill(new Array(n + 1).fill(0));

  /*
  let dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1);
    for (let j = 0; j < n + 1; j++) {
      dp[i][j] = 0;
    }
  }
  */

  let dp = [...new Array(s1.length + 1)].map(() =>
    new Array(s2.length + 1).fill(0)
  );
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (s1[i - 1] === s2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else {
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
};

let s1 = 'hosre';
let s2 = 'ros';

// editDistance(s1, s2);

// console.log(editDistanceDp(s1, s2));

console.log(editDistanceDp('sunday', 'saturday'));
