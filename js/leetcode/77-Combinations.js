// 77: https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  const combineCurrent = (currentArr, k, temp, n) => {
      if (currentArr.length === k) res.push(currentArr);
      for (let i = temp; i <= n; i++) {
          currentArr.push(i);
          combineCurrent(currentArr.slice(), k, i + 1, n);
          currentArr.pop();
      }
  }
  combineCurrent([], k, 1, n);
  return res;
};