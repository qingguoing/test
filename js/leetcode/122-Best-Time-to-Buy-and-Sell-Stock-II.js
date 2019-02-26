// 122: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  const len = prices.length;
  for (let i = 1; i < len; i++) {
      const pre = prices[i - 1];
      const cur = prices[i];
      if (cur >= pre) {
          res += cur - pre;
      }
  }
  return res;
};
