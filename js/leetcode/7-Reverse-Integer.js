/**
https://leetcode.com/problems/reverse-integer/description/

Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */


 /**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let tmpArr = String(x).split('');
    let resStr = '';
    if (tmpArr[0] === '-') {
        resStr += '-';
        tmpArr.shift();
    }
    resStr += tmpArr.reverse().join('');
    const res = parseInt(resStr, 10);
    if (res >= -Math.pow(2, 31) && res < Math.pow(2, 31)) {
        return res;
    }
    return 0;
};