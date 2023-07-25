/**
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 */

var reverseString = function (s) {
  let n = s.length;
  // for (let i = n - 1, j=0; i > Math.floor(n/2); i--, j++)
  for (let i = n - 1, j = 0; i >= n / 2; i--, j++) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  return s;
};
