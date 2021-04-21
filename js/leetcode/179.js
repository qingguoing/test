/**
 * @param {number[]} nums
 * @return {string}
 */

var asciiCodeSort = (a, b, i = 0) => {
    if (a.length - 1 < i) {
        return a[i-1] - b[i];
    }
    if (b.length - 1 < i) {
        return b[i-1] - a[i];
    }
    const charA = a.charCodeAt(i);
    const charB = b.charCodeAt(i);
    if (charA === charB) return asciiCodeSort(a, b, i + 1);
    return charB - charA;
}

var largestNumber = function(nums) {
    const res = nums.sort((a, b) => asciiCodeSort(String(a), String(b))).join('');
    console.log('xxx', res);
    return res;
};

const a = largestNumber([111311, 1113]);
