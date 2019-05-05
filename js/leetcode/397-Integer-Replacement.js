/**
 * 397: https://leetcode.com/problems/integer-replacement/
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  let res = 0;
  function test(num) {
    if (num == 1) return 0;
    if ((num & 1) == 0) {
      num >>>= 1;
    } else if (num == 3 || ((num >>> 1) & 1) == 0) {
      --num;
    } else {
      ++num;
    }
    return 1 + test(num)
  }
  return res + test(n);
};
