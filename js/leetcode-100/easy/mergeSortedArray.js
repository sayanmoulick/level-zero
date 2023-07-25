/**
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 */

var mergeSortedArray = function (nums1, m, nums2, n) {
  let pos = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[pos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
