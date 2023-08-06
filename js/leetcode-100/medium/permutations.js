const compute = (nums, dp, dpMemoize, finalResult) => {
  if (dp.length === nums.length) {
    finalResult.push([...dp]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!dpMemoize[i]) {
      dpMemoize[i] = true;
      dp.push(nums[i]);
      compute(nums, dp, dpMemoize, finalResult);
      dp.pop();
      dpMemoize[i] = false;
    }
  }
};

/*
const computeHelper = (boxes, ci, ti, finalResult) => {
  if (ci > ti) {
    finalResult.push([...boxes]);
    return;
  }

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] === 0) {
      boxes[i] = ci;
      compute(boxes, ci + 1, ti, finalResult);
      boxes[i] = 0;
    }
  }
};
*/

const permute = function (nums) {
  let finalResult = [];
  let dp = [];
  let dpMemoize = [];
  compute(nums, dp, dpMemoize, finalResult);
  //   computeHelper(nums, 1, nums.length, finalResult);
  return finalResult;
};

console.log(permute([1, 2, 3]));
