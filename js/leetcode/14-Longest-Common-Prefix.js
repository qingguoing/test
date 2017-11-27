/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a, b) => a - b);
    let prefix = tmpStr = '';
    const arrLen = strs.length;
    if (arrLen === 0) {
        return prefix;
    }
    
    if (arrLen === 1 || !strs[0]) {
        return strs[0];
    }
    
    const first = strs[0];
    const strLen = first.length;
    
    for( let i = 0; i < strLen; i++) {
        tmpStr += first[i];
        for (let j = 1; j < arrLen; j++) {
            if (strs[j].indexOf(tmpStr) !== 0) {
                return prefix;
            }
        }
        prefix = tmpStr;
    }
    return prefix;
};