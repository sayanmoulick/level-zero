const countAndSay = (n) => {
  let start = '1';
  while (--n) {
    let tempStart = '';
    let freq = 1;

    for (let index = 0; index < start.length; index++) {
      if (start[index] !== start[index + 1]) {
        tempStart += `${freq}${start[index]}`;
        freq = 1;
      } else {
        freq += 1;
      }
    }

    start = tempStart;
  }

  return start;
};

const result = countAndSay(5);
console.log(result);
