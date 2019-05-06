/**
 * 1016: https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function(S, N) {
  for (let i = N; i > N/2; i-- ) {
      if (!S.includes(i.toString(2))) {
          return false;
      }
  }
  return true;
};