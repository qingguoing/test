// 13: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  
  const len = s.length;
  let pre = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
      const curRoman = s[i];
      const cur = romanMap[curRoman];
      if (cur > pre) {
          res += cur - pre * 2;
      } else {
          res += cur;
      }
      pre = cur;
  }
  return res;
};