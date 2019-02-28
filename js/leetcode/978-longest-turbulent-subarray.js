// 978: https://leetcode.com/problems/longest-turbulent-subarray/
/**
 * solution 1: 80 ms, 41.8MB
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize1 = function(A) {
  const len = A.length;
  if (len < 3) return len;
  let flag = 1;
  let res = 1;
  const resArr = [];
  for (let i = 0; i < len - 1; i++) {
    const j = i + 1;
    if (!(i % 2)) {
      if (A[i] > A[j]) {
        if (flag) {
          res++;
          continue;
        }
        if (!flag) {
          flag = 1;
          resArr.push(res);
          res = 2;
          continue;
        }
      } else if (A[i] < A[j]) {
        if (!flag) {
          res++;
          continue;
        }
        if (flag) {
          flag = 0;
          resArr.push(res);
          res = 2;
          continue;
        }
      } else {
        resArr.push(res);
        res = 1;
        continue;
      }
    }
    if (i % 2) {
      if (A[i] < A[j]) {
        if (flag) {
          res++;
          continue;
        }
        if (!flag) {
          flag = 1;
          resArr.push(res);
          res = 2;
          continue;
        }
      } else if (A[i] > A[j]) {
        if (!flag) {
          res++;
          continue;
        }
        if (flag) {
          flag = 0;
          resArr.push(res);
          res = 2;
          continue;
        }
      } else {
        resArr.push(res);
        res = 1;
        continue;
      }
    }
  }
  resArr.push(res);
  return Math.max(...resArr);
};

/**
 * solution2: 80ms, 41.9MB
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize2 = function(A) {
  const len = A.length;
  let res = 1;
  let start = 0;
  for (let i = 1; i < len; ++i) {
    const comp = compare(A[i - 1], A[i]);
    if (comp == 0) {
      start = i;
    } else if ((i == len - 1) || (comp * compare(A[i], A[i + 1]) != -1)) {
      res = Math.max(res, i - start + 1);
      start = i;
    }
  }
  return res;

  function compare(a, b) {
    if (a == b) return 0;
    return a - b > 0 ? 1 : -1;
  }
};
