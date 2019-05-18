/**
 * 820: https://leetcode.com/problems/short-encoding-of-words/
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
  let res = '';
  words.sort((a, b) => b.length - a.length);
  words.forEach((word) => {
      if (!res.includes(`${word}#`)) {
          res += `${word}#`;
      }
  });
  return res.length;
};