/**
 * 438: https://leetcode.com/problems/find-all-anagrams-in-a-string/
 */
/**
 * solution1: 10960 ms
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  p = p.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  const res = [];
  for (let i = 0; i <= sLen - pLen; i++) {
      const sub = s.substr(i, pLen).split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
      if (sub === p) {
          res.push(i);
      }
  }
  return res;
};
