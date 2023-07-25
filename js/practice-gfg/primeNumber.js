const isPrime = (number) => {
  return new Promise((resolve) => {
    let isPrime = true;
    for (let i = 3; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    resolve(isPrime);
  });
};

// in n range also
const generatePrimeNumber = (start, end) => {};

const primeFactors = (num) => {};

module.exports = {
  isPrime,
  generatePrimeNumber,
  primeFactors
};
