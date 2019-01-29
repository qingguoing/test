// 500: https://leetcode.com/problems/keyboard-row/
/**
 * solution 1: 88ms ugly
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words){
    const letterLoc = {
      z: 1,
      x: 1,
      c: 1,
      v: 1,
      b: 1,
      n: 1,
      m: 1,
      a: 2,
      s: 2,
      d: 2,
      f: 2,
      g: 2,
      h: 2,
      j: 2,
      k: 2,
      l: 2,
    };
    const isSingleRow = (word) => {
      const initVal = letterLoc[word.charAt(0).toLowerCase()];
      const len = word.length;
      for (let i = 1; i < len; i++) {
        const letter = word.charAt(i).toLowerCase();
        if (letterLoc[letter] !== initVal) {
          return false;
        }
      }
      return true;
    }
    return words.filter(word => isSingleRow(word));
};

/**
 * solution 2
 * 76ms
 */
var findWords = function(words) {
  let keyboardMap = {
    'qwertyuiop': 0,
    'asdfghjkl': 1,
    'zxcvbnm': 2,
  }
let output = []
for (let i = 0; i < words.length; i++)  {
  let currentWord = words[i].split('')
  let result = currentWord.reduce((acc, elem) => {
    Object.keys(keyboardMap).forEach(key => {
      let exists = key.indexOf(elem.toLowerCase()) > -1
      if (exists) {
        acc[key] = true
      }
    })
    return acc
  }, {})
  if (Object.keys(result).length === 1) {
    output.push(currentWord.join(''))
  } 
}
return output
};


/**
 * 68ms
 * solution 3
 */
var findWords = function(words) {
  return words.filter((w) => {
      // remove word from array if it fails matching all three rows
      if (
          !/^[qwertyuiop]*$/i.test(w) &&
          !/^[asdfghjkl]*$/i.test(w) &&
          !/^[zxcvbnm]*$/i.test(w)
      ) return false;
      
      return true;
  });
};