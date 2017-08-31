/**
 * #### [Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/description/)
 
 All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
 
 Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
 
 For example,
 
 ```javascript
 Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
 
 Return:
 ["AAAAACCCCC", "CCCCCAAAAA"].
 ```
 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const hash = {};
    const len = s.length;
    const res = [];
    for(let i = 0; i <= len - 10; i++) {
        const substr = s.substr(i, 10);
        if (hash[substr] === 1) {
            res.push(substr);
            hash[substr]++;
        } else if(!hash[substr]){
            hash[substr] = 1;
        }
    }
    return res;
};
