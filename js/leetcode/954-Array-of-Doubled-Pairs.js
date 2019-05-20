/**
 * 954: https://leetcode.com/problems/array-of-doubled-pairs/
 * 
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
  const tempObj = {};
  A.forEach(val => {
      if (tempObj[val]) {
          tempObj[val]++;
      } else {
          tempObj[val] = 1;
      }
  });
  A.sort((a, b) => Math.abs(a) - Math.abs(b));
  for (let i = 0; i < A.length; i++) {
      const val = A[i];
      const doubleVal = val * 2;
      if (tempObj[val] === 0) {
          continue;
      }
      if (!tempObj[doubleVal]) return false;
      tempObj[doubleVal]--;
      tempObj[val]--;
  }
  return true;
};
