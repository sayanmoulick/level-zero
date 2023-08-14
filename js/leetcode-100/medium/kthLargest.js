/*
215. Kth Largest Element in an Array
Medium

15075

720

Add to List

Share
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
Accepted
1,862,380
Submissions
2,781,657
Seen this question in a real interview before?

Yes

No
Wiggle Sort II
Medium
Top K Frequent Elements
Medium
Third Maximum Number
Easy
Kth Largest Element in a Stream
Easy
K Closest Points to Origin
Medium
Find the Kth Largest Integer in the Array
Medium
Find Subsequence of Length K With the Largest Sum
Easy
K Highest Ranked Items Within a Price Range
Medium
*/

var findKthLargest = function (nums, k) {
    const finalIdx = nums.length - k;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // random pivot
        const pivot = Math.floor(Math.random() * (right - left + 1)) + left;

        const pivotidx = partition(pivot, left, right, nums);

        if (pivotidx === finalIdx) return nums[finalIdx];

        // check in right part
        if (pivotidx < finalIdx) left = pivotidx + 1;
        else right = pivotidx - 1;
    }
};

const partition = (pivot, start, end, nums) => {
    // move pivot to end
    [nums[pivot], nums[end]] = [nums[end], nums[pivot]];

    let i = start;
    let j = start;

    // move smaller to the begining
    while (j < end) {
        if (nums[j] <= nums[end]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
        j++;
    }

    [nums[i], nums[end]] = [nums[end], nums[i]];
    return i;
}
