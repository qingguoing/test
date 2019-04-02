/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const arr = new Array(n).fill(0).map((i, index) => index + 1);
    let res = [];
    const len = ('' + n).length;
    if (n < 10) return arr;
    for (let i = 1; i < 10; i++) {
      res = res.concat(arr.filter(num => {
        const numStr = '' + num;
        for (let j = 0; j < len; j++) {
          const indexZoreStr = ('' + i).padEnd(j, '0');
          return numStr.indexOf(indexZoreStr) === 0;
        }
        const index = '' + i;
        return numStr.indexOf(index) === 0;
      }));
    }
    return res;
};

console.log(lexicalOrder(100));