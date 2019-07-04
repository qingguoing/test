// 950: https://leetcode.com/problems/reveal-cards-in-increasing-order/

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
  deck.sort((a, b) => a - b);
  const len = deck.length;
  if (len < 3) return deck;
  const indexArr = new Array(len).fill(0).map((v, i) => i);
  const ans = [];
  deck.forEach((num) => {
      const index = indexArr.shift();
      ans[index] = num;
      if (indexArr.length) {
          indexArr.push(indexArr.shift());
      }
  });
  return ans;
};