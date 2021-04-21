/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let preValue = nums[0];
    let times = 1;
    for (let i = 1; i < nums.length;) {
        if (preValue === nums[i]) {
            times++;
        } else {
            preValue = nums[i];
            times = 1;
        }
        if (times > 2) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    console.log('xxx', nums);
    return nums.length;
}

const res = removeDuplicates([0,0,1,1,1,1,2,3,3])
console.log(res);