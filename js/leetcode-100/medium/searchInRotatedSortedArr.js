const search = (nums, target) => {
    if (!nums.length) return -1;

    let start = 0;
    let end = nums.length - 1;

    /* 50ms */
    while (start <= end) {
        if (start === end && nums[start] === target) return start;
        else if (nums[start] === target) return start;
        else if (nums[end] === target) return end;
        else {
            start++;
            end--;
        }
    }

    /* 53ms */
    /*
    while (start <= end) {
        // let mid = start - Math.floor((end - start) / 2);
        let mid = Math.floor((start + end) / 2);
        
        if (target === nums[mid]) return mid;

        if (nums[start] <= nums[mid]) {
            // left part search
            
            if (nums[start] <= target && target <= nums[mid]) end = mid - 1;
            else start = mid + 1;
        } else {
            //right part search

            if (nums[mid] <= target && target <= nums[end]) start = mid + 1;
            else end = mid - 1;
        }

    }
*/
    return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;

// let nums = [4, 5, 6, 7, 0, 1, 2], target = 3;

// let nums = [1], target = 1;

// let nums = [1], target = 3;

console.log(search(nums, target));