const dfs = (curIdx, curRes, n, k, finalResult) => {
  if (curIdx > n + 1) return;

  if (curRes.length === k) {
    finalResult.push([...curRes]);
    return;
  }

  for (let i = curIdx; i <= n; i++) {
    curRes.push(i);
    dfs(i + 1, curRes, n, k, finalResult);
    curRes.pop();
  }
};

function findCombination(position, seq, n, k, mutRes) {
  if (k === 0) {
    mutRes.push([...seq]);
    return;
  }
  if (position > n) return;

  seq.push(position);
  findCombination(position + 1, seq, n, k - 1, mutRes);
  seq.pop();

  findCombination(position + 1, seq, n, k, mutRes);
}

var combine = function (n, k) {
  let finalResult = [];
  dfs(1, [], n, k, finalResult);
  //   findCombination(1, [], n, k, finalResult);
  return finalResult;
};

console.log(combine(4, 2));

// T: O(k) * O(nCk) =>k * ( n! / ((n-k)! * k!) )
// S: O(nCk)
