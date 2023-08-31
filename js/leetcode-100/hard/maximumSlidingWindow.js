const maxSlidingWindow = function (nums, k) {
    let result = [];
    for (let i = 0; i <= nums.length - k; i++){
        let max = nums[i];
        for (let j = i; j < i + k; j++){
            if (nums[j] > max) max = nums[j];
        }
        // result.push(getMax(nums[i], nums[i + k]));
        result.push(max);
    }
    return result;
};

const maxSlidingWindowOptimized = function(nums, k) {
    const res = [];
    let left = 0;
    let right = 0;
    const q = [];

    while (right < nums.length) {
        while (q.length > 0 && nums[right] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(right);

        if (left > q[0]) {
            q.shift();
        }

        if (right + 1 >= k) {
            res.push(nums[q[0]]);
            left++;
        }
        right++;
    }

    return res;    
};

// let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;
let nums = [1], k = 1;

maxSlidingWindow(nums, k);