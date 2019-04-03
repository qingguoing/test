/**
 * https://leetcode.com/problems/lexicographical-numbers/
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const arr = new Array(n).fill(0).map((i, index) => index + 1);
    let res = [];
    const len = ('' + n).length;
    if (n < 10) return arr;
    for (let i = 1; i < 10; i++) {
      for (let j = 0; j < len; j++) {
        const indexZore = i * Math.pow(10, j);
        if (indexZore <= n) {
          res.push(indexZore);
        }
      }
      res = res.concat(arr.filter(num => {
        const numStr = '' + num;
        const index = '' + i;
        const second = numStr.charAt(1);
        return (numStr.indexOf(index) === 0) && (!!second && second !== '0');
      }));
    }
    return res;
};

console.log(lexicalOrder(100));