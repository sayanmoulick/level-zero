class Solution {
  numberTriangleThree (n) {
    let row = 1;
    let counter = 1;

    while (row <= n) {
      let col = 1;
      let strn = '';

      while (col <= row) {
        strn += counter + ' ';
        counter += 1;
        col += 1;
      }

      console.log(strn);
      row += 1;
    }
  }

  numberTriangleFour (n) {
    let row = 1;
    let counter = 1;

    while (row <= n) {
      let col = 1;
      let strn = '';
      counter = row;

      while (col <= row) {
        strn += counter + ' ';
        counter += 1;
        col += 1;
      }

      console.log(strn);
      row += 1;
    }
  }

  numberTriangleFourAdvanced (n) {
    let row = 1;

    while (row <= n) {
      let col = 1;
      let strn = '';

      while (col <= row) {
        strn += row + col - 1 + ' ';
        col += 1;
      }

      console.log(strn);
      row += 1;
    }
  }

  numberTriangleFive (n) {
    let row = 1;

    while (row <= n) {
      let col = 1;
      let strn = '';

      while (col <= row) {
        strn += row - col + 1 + ' ';
        col += 1;
      }

      console.log(strn);
      row += 1;
    }
  }
}
