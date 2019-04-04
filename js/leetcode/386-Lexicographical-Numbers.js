// 386: https://leetcode.com/problems/lexicographical-numbers/

/**
 * 240ms, 49.3MB
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const arr = new Array(n).fill(0).map((i, index) => index + 1);
    const len = ('' + n).length;
    if (n < 10) return arr;
    arr.sort((a, b) => {
      for(i = 0; i < len; i++) {
        const aIndex = (a + '').charAt(i);
        const bIndex = (b + '').charAt(i);
        if (!aIndex) {
          return -1;
        }
        if (!bIndex) {
          return 1;
        }
        if (aIndex === bIndex) continue;
        return aIndex - bIndex;
      }
    });
    return arr;
};


/**
 * 100ms, 43MB
 * @param {*} n 
 */
var lexicalOrder2 = function(n) {
  const res = [];
  for (let i = 1; i < 10; ++i) {
    dfs(i, n, res);
  }
  return res;

  function dfs(cur, n, res) {
    if (cur > n) return;
    res.push(cur);
    for (let i = 0; i < 10; ++i) {
      if (cur * 10 + i > n) {
        return;
      }
      dfs(cur * 10 + i, n, res);
    }
  }
};
