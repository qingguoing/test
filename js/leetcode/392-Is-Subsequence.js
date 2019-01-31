// 392: https://leetcode.com/problems/is-subsequence/
/**
 * solution1: 84 ms
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence1 = function(s, t) {
  const sLen = s.length;
  let start = 0;
  for(let i = 0; i < sLen; i++) {
      const char = s.charAt(i);
      const index = t.indexOf(char, start);
      if (index > -1) {
          start = index + 1;
      } else {
          return false;
      }
  }
  return true;
};

// solution2: regexp 88ms
var isSubsequence2 = function(s, t) {
    return new RegExp(s.split('').join('.*?')).test(t)
};
