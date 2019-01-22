/**
 * 258: https://leetcode.com/problems/add-digits/
 */

/**
 * solution 1
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) return num;
  const arr = ('' + num).split('');
  const sum = arr.reduce((a, b) => parseInt(a) + parseInt(b));
  return addDigits(sum);
};

/**
 * solution 2
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num === 0) return 0;
  return (num % 9 === 0) ? 9 : num % 9
};