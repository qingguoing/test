/**
 * 796: https://leetcode.com/problems/rotate-string/submissions/
 */
/**
 * solution1: 68ms
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  const len = A.length;
  if (len !== B.length) return false;
  if (A === B) return true;
  for (let i = 0; i< len; i++) {
      const move = A.substr(0, i + 1);
      const left = A.slice(i + 1, len);
      if (`${left}${move}` === B) return true;
  }
  return false;
};

/**
 * solution 2
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
	return B.repeat(2).includes(A) && A.length == B.length
};