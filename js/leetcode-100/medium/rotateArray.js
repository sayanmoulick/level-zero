/** Rotate Array

  * Given an array, rotate the array to the right by k steps, where k is non-negative.
*/

// TC: O(n) SC: O(1)
var rotate = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }; // suppose  ----->--->
  reverse(0, nums.length - 1); // reverse   <--<------
  reverse(0, k - 1); // reverse first part ---><----
  reverse(k, nums.length - 1); // reverse second part --->----->
};

// in-built js
nums.unshift(...nums.splice(-(k % nums.length)));

// brute force
let n = nums.length;
for (let i = 0; i < k; i++) {
  let temp = nums[n - 1];
  for (let i = n - 1; i > 0; i--) {
    nums[i] = nums[i - 1];
  }
  nums[0] = temp;
}
