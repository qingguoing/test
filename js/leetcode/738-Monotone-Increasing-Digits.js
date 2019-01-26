/**
 * 738: https://leetcode.com/problems/monotone-increasing-digits/
 */

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  const arr = (''+N).split('');
  const len = arr.length;
  let marker = len;
  for (let i = len - 1; i > 0; i--) {
      if (arr[i] < arr[i - 1]) {
          marker = i;
          arr[i - 1] -= 1;
      }
  }
  for (let i = marker; i < len; i++) {
      arr[i] = '9';
  }
  return arr.join('');
};

