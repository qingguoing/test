/**
 * 413: https://leetcode.com/problems/arithmetic-slices/
 * 
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  const len = A.length;
  if (len < 3) return 0;
  const res = [];
  let start = A[0], gap = A[1] - start, temp = [A[0], A[1]];
  for(let i = 2; i < len; i++) {
      if (gap === A[i] - A[i-1]) {
          temp.push(A[i]);
      } else {
          if (temp.length > 2) res.push(temp);
          temp = [A[i - 1], A[i]];
          gap = A[i] - A[i - 1];
      }
  }
  if (temp.length > 2) res.push(temp);
  let count = 0;
  function getCount(len) {
      if (len === 3) return 1;
      return getCount(len - 1) + len - 3 + 1;
  }
  res.forEach(item => {
      const len = item.length;
      count += getCount(len);
  });
  return count;
};

numberOfArithmeticSlices([1, 2, 3, 4])