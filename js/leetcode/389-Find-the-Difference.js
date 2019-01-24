/**
 * 389: https://leetcode.com/problems/find-the-difference
 */
/**
 * solution1: 92ms
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const len = s.length;
  let resStr = t;
  for (let i = 0; i < len; ++i) {
    resStr = resStr.replace(s.charAt(i), '');
  }
  return resStr;
};

/**
 * solution2: 76ms
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  if (s.length === 0) return t;
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var sSum = s.split('').map(e => e.charCodeAt(0) - 'a'.charCodeAt(0)).reduce((a, b) => a + b);
  var tSum = t.split('').map(e => e.charCodeAt(0) - 'a'.charCodeAt(0)).reduce((a, b) => a + b);
  return letters[tSum -sSum];
};