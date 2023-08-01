const ncr = (n, r) => {
  let sum = 1;

  // Calculate the value of n choose r using the binomial coefficient formula
  for (let i = 1; i <= r; i++) {
    sum = (sum * (n - r + i)) / i;
  }

  return Math.floor(sum);
};

// recursive
function nCR(n, r) {
  if (r > n) return 0;
  if (r === 0 || r === n) return 1;
  return nCr(n - 1, r - 1) + nCr(n - 1, r);
}

// logarithmic
function NCR(n, r) {
  // If r is greater than n, return 0
  if (r > n) return 0;

  // If r is 0 or equal to n, return 1
  if (r === 0 || n === r) return 1;

  // Initialize the logarithmic sum to 0
  let res = 0;

  // Calculate the logarithmic sum of the numerator and denominator using loop
  for (let i = 0; i < r; i++) {
    // Add the logarithm of (n-i) and subtract the logarithm of (i+1)
    res += Math.log(n - i) - Math.log(i + 1);
  }

  // Convert logarithmic sum back to a normal number
  return Math.round(Math.exp(res));
}

// naive
function nCr(n, r) {
  return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n
function fact(n) {
  if (n == 0) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res = res * i;
  return res;
}

// Driver code
let n = 5,
  r = 3;
console.log(nCr(n, r));
console.log(nCR(n, r));
console.log(ncr(n, r));
