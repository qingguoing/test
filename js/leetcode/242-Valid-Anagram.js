/**
 * 242: https://leetcode.com/problems/valid-anagram/
 * solution1: 112ms, 39.1MB
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sLen = s.length;
  const tLen = t.length;
  
  if (sLen != tLen) return false;
  const res1 = s.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  const res2 = t.split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  
  return res1 === res2;
};


/**
 * solution2: 108ms, 39.2MB
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram2 = function(s, t) {
  const sLen = s.length;
  const tLen = t.length;
  if (sLen != tLen) return false;
  const counter = [];
  for (let i = 0; i < sLen; i++) {
    counter[s[i].charCodeAt(0) - 97]++;
    counter[t[i].charCodeAt(0) - 97]--;
  }
  return !counter.some(item != 0);
};