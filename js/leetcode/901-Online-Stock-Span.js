// 901: https://leetcode.com/problems/online-stock-span/

var StockSpanner = function() {
  this.stockArr = [];
};

/** 
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function(price) {
  let res = 1;
  this.stockArr.push(price);
  const len = this.stockArr.length;
  for (let i = len - 2; i >= 0; --i) {
      if (this.stockArr[i] > price) break;
      ++res;
  }
  return res;
};

/** 
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/