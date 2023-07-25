// const getFactors = (num) => {};

const iterativeFactorial = (num) => {
  let factorial = 1;
  if (num === 0 || num === 1) return factorial;

  while (num > 0) {
    factorial = factorial * num;
    num -= 1;
  }

  return factorial;
};

console.log(iterativeFactorial(4));

const recursiveFactorial = (num, factorial = 1) => {
  if (num === 0 || num === 1) return factorial;

  factorial = factorial * num;

  return recursiveFactorial(num - 1, factorial);
};

console.log(recursiveFactorial(5));
