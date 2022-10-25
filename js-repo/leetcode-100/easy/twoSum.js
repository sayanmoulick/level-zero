/**
 * Input: nums = [2,11,7,15], target = 9
 * Output: [0,2]
 */

// Brute Force - Non Optimized

// var twoSum = function (nums, target) {
//     let n = nums.length
//     let res = []
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             if(nums[i] + nums[j] === target) {
//                 res.push(i, j)
//                 break
//             }
//         }

//     }
//     return res
// };

var twoSum = function (nums, target) {
  let n = nums.length;
  let hashMap = {};

  for (let i = 0; i < n; i++) {
    if (hashMap[target - nums[i]] !== undefined) {
      return [ hashMap[target - nums[i]], i ];
    }
    hashMap[nums[i]] = i;
  }
  return [];
};
