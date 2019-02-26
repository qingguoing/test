// 122: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
/**
 * 60ms, 35.4MB
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


/**
 * 64ms, 35.1MB
 * solution2
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
  const len = prices.length;
  const total = prices.reduce((acc, cur, index) => {
      if (index === len - 1) return acc;
      const next = prices[index + 1];
      if (next >= cur) return acc + next - cur;
      return acc;
  }, 0);
  return total;
};
