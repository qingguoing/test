// 974: https://leetcode.com/problems/subarray-sums-divisible-by-k/

/**
 * solution 1: Time Limit Exceeded
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    const len = A.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j <= len; j++) {
        const subArr = A.slice(i, j);
        const sum = subArr.reduce((a, b) => a + b, 0);
        if(!(sum % K)) {
          res++;
        }
      }
    }
    return res;
};

/**
 * 120ms, 42.4MB
 * @param {*} A 
 * @param {*} K 
 */
var subarraysDivByK2 = function(A, K) {
  let P = [0];
  A.forEach((val, i) => P[i + 1] = P[i] + A[i]);
  let count = {};
  for (p of P) {
    const rest = (p % K + K) % K;
    if (count[rest]) {
      count[rest]++;
    } else {
      count[rest] = 1;
    }
  }
  let res = 0;
  Object.keys(count).forEach(val => {
    const value = count[val];
    res += value * (value - 1) / 2;
  });
  return res;
};
