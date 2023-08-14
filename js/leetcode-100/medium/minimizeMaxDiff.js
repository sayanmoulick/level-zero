/*

const nums = [10, 1, 2, 7, 1, 3];
// const nums_copy = nums // shallow copy by reference, changing any one nums or nums_copy will reflect both
let nums_copy = [];
Object.assign(nums_copy, nums)

nums_copy.sort((a, b) => (a - b))
console.log(nums)
console.log(nums_copy)


let myNum = 1;
let copyMyNum = myNum;
// copyMyNum += 2;
myNum = myNum + 3;
console.log(myNum, copyMyNum)

*/

const minimizeMaxDiff = (nums, p) => {
    nums.sort((a, b) => (a - b));

    let start = 0;
    // let end = nums.length;
    let end = nums[nums.length - 1] - nums[0];

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (checkPairFormation(nums, p, mid)) end = mid;
        else start = mid + 1;
    }

    return start;
}

const checkPairFormation = (nums, p, mid) => {
    let count = 0;
    for (let i = 0; i < nums.length + 1 && count < p;){
        if (nums[i + 1] - nums[i] <= mid) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }

    return count >= p;
}

console.log(minimizeMaxDiff([10, 1, 2, 7, 1, 3], 2));