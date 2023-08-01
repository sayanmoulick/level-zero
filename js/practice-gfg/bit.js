const bin = (n) => {
  let i;
  let output = '0';
  for (i = 1 << 30; i > 0; i = Math.floor(i / 2)) {
    if ((n & i) != 0) {
      output += '1';
    } else {
      output += '0';
    }
  }
  return output;
};

const decimalToBinary = (n) => {
  // in built
  //   const binaryNumber = n.toString(2);

  // custom
  const binaryNumber = bin(n);

  console.log(binaryNumber);
};

decimalToBinary(2);

function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 1;
  while (x != 0) {
    rem = x % 2;
    console.log(
      `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
        x / 2
      )}`
    );
    x = parseInt(x / 2);

    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(`Binary: ${bin}`);
}

const findSetBits = (n) => {
  let count = 0;
  let number = n;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  console.log(`Set bits of ${number} is ${count} `);
};

convertToBinary(7);
findSetBits(7);
