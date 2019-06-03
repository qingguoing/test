// 1052: https://leetcode.com/problems/grumpy-bookstore-owner/

/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let res = 0;
  const len = customers.length;
  let max = 0;
  for (let i = 0; i < len; i++) {
      let num = customers[i];
      if (!grumpy[i]) {
          res += num;
      }
      let sum = 0;
      for (let j = i; j < X + i && j < len; j++) {
          sum += grumpy[j] ? customers[j] : 0;
      }
      max = Math.max(max, sum);
  }
  return res + max;
};

/**
 * solution 2
 * 维持 X 的定制范围不变
 */
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    const len = customers.length;
    let max = tempNum = 0;
    let res = 0;
    for (let i = 0; i < len; i++) {
        const num = customers[i];
        res += grumpy[i] ? 0 : num;
        tempNum += grumpy[i] ? num : 0;
        if ( i >= X) tempNum -= grumpy[i - X] ? customers[i - X] : 0;
        max = Math.max(max, tempNum);
    }
    return res + max;
};
  
