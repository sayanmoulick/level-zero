/**
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */

var moveZeroes = function (nums) {
  let n = nums.length;
  let j = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] == 0 && nums[i + 1] != 0) {
      [ nums[i - j], nums[i + 1] ] = [ nums[i + 1], nums[i - j] ];
      continue;
    }
    if (nums[i] == 0 && nums[i + 1] == 0) j++;
  }
  return nums;
};
