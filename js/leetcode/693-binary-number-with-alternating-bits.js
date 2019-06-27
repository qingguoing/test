// 693: https://leetcode.com/problems/binary-number-with-alternating-bits/

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits1 = function(n) {
  let bitNum = n.toString(2);
  let len = bitNum.length;
  let res = 0;
  for(let i = len - 1; i >=0; --i) {
      res += bitNum[i] == '1' ? 1 : -1;
      if((n % 2) && (res > 1 || res < 0)) {
        return false;
      }
      if (!(n % 2) && (res > 0 || res < -1)) {
        return false;
      }
  }
  return true;
};


/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits2 = function(n) {
  let bitNum = n.toString(2);
  for(let i = bitNum.length - 1; i > 0; --i) {
    if (bitNum.charAt(i) === bitNum.charAt(i - 1)) {
      return false;
    }
  }
  return true;
};