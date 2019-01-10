/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */

/**
 * solution 1
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let i = 0;
  const test = function test (arr) {
      const len = arr.length;
      if (len == 1) return i;
      if (len == 2) return arr[1] > arr[0] ? ++i : i;
      const center = Math.floor(len/2);
      const left = arr[center - 1];
      const right = arr[center];
      if (left < right) {
          i += center;
          return test(arr.slice(center, len));
      }
      return test(arr.slice(0, center));
  };
  return test(A);
};

/**
 * solution 2
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max(...A));
};
