/**
 * Input: nums = [0,1,0,3,12]
 * Output: true
 */

var containsDuplicate = function (nums) {
  let duplicateCounts = {};
  let duplicateFlag = false;
  for (let i = 0, l = nums.length; i < l; ++i) {
    if (duplicateCounts[nums[i]]) {
      duplicateCounts[nums[i]] += 1;
    } else {
      duplicateCounts[nums[i]] = 1;
    }

    if (duplicateCounts[nums[i]] > 1) {
      duplicateFlag = true;
      break;
    }
  }
  return duplicateFlag;
};
