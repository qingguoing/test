/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tmpObj = {};
    let res = i = j = 0;
    const len = s.length;
    while( i < len & j < len) {
        if(tmpObj[s[j]]) {
            tmpObj[s[i++]] = 0;
        } else {
            tmpObj[s[j++]] = 1;
            res = Math.max(res, j - i);
        }
    }
    
    return res;
};
