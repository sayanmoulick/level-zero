var letterCombinations = function (digits) {
  const keyLetterMapping = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  let output = [];

  if (!digits) return output;

  const dfs = (idx, stackResult) => {
    if (idx === digits.length) {
      output.push(stackResult.join(''));
      return;
    }

    let chars = keyLetterMapping[digits[idx]];

    for (let ch of chars) {
      stackResult.push(ch);
      // recursive call
      dfs(idx + 1, stackResult);
      // back to parent
      stackResult.pop();
    }
  };

  dfs(0, []);

  return output;
};

console.log(letterCombinations('23'));
