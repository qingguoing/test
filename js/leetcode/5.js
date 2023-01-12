/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let str = '';
    for(let i = 0,start = 0, end = 0; i<s.length; i++) {
        start = i;
        end = i;
        while(end + 1 < s.length && s[end + 1] === s[i]) {
            end +=1;
        }
        while(start - 1 >=0 && end + 1 < s.length && s[end + 1] === s[start - 1]) {
            end +=1;
            start -=1;
        }
        if (end > start && str.length < end - start + 1) {
            str = s.slice(start, end + 1);
        }
    }
    return str ? str : s[0];
};

console.log(longestPalindrome('aba'));