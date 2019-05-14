/**
 * 916: https://leetcode.com/problems/word-subsets/
 * 
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
var wordSubsets = function(A, B) {
  const subLetterObj = {};
  const res = [];
  B.forEach(item => {
      const tempObj = {};
      const words = item.split('');
      words.forEach(letter => {
          if (tempObj[letter]) {
              tempObj[letter]++;
          } else {
              tempObj[letter] = 1;
          }
          if (subLetterObj[letter]) {
              subLetterObj[letter] = Math.max(tempObj[letter], subLetterObj[letter]);
          } else {
              subLetterObj[letter] = 1;
          }
      });
  });

  A.forEach(word => {
      const tempLetterObj = { ...subLetterObj };
      word.split('').forEach(letter => {
          const num = tempLetterObj[letter];
          if (num) {
              if (num === 1) {
                delete tempLetterObj[letter];
              } else {
                tempLetterObj[letter]--;
              }
          }
      });
      if (!Object.keys(tempLetterObj).length) {
          res.push(word);
      }
  });
  return res;
};

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"], ["e","o"]));