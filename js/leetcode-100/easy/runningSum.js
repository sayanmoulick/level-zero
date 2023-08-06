/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

  * Return the running sum of nums.
 */

// naive soln
var runningSum = function (nums) {
  let runningSum = [];
  let sum = 0;
  for (num of nums) {
    sum += num;
    runningSum.push(sum);
  }
  return runningSum;
};

// optmised soln
var runningSum = function (nums) {
  let sum = 0;
  const myArray = [];
  for (let i = 0, l = nums.length; i < l; i++) {
    sum += nums[i];
    myArray.push(sum);
  }
  return myArray;
};

var runningSum = function (nums) {
  const output = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    output.push(output[output.length - 1] + nums[i]);
  }

  return output;
};
