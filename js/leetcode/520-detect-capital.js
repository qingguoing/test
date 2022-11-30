//https://leetcode-cn.com/problems/detect-capital/

/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {
    const up = word.toUpperCase();
    const lower = word.toLowerCase();
    const camel = word[0].toUpperCase() + word.slice(1).toLowerCase();

    return [up, lower, camel].includes(word);
};