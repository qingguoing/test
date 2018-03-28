var nextPermutation = function(nums) {
    const len = nums.length;
    let flag = true;
    for (let i = len - 1; (i > 0) && flag; i--) {
        if (nums[i] > nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
            flag = false;
        }
    }
    if (flag) nums.reverse();
};

console.log(nextPermutation([1, 2, 3]))