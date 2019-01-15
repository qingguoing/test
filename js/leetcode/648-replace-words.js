/**
 * 648: https://leetcode.com/problems/replace-words/
 */

/**
 * solution1
 * 性能不行，faster than 6.67%。。。
 * 568ms
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  dict.sort((a, b) => a - b);
  const dictArr = [...new Set(dict)];
  const len = dictArr.length;
  for (i = 0; i < len; ++i) {
    const a = dictArr[i];
    const aLen = a.length;
    for (j = i + 1; j < len && aLen < dictArr[j].length; ++j) {
      if (dictArr[j].indexOf(a) > -1) {
        dictArr[j] = a;
      }
    }
  }
  const dictSet = new Set(dictArr);
  for (rootWord of dictSet) {
    const regExp = new RegExp(`\\b${rootWord}\\w+`, 'g');
    sentence = sentence.replace(regExp, rootWord);
  }
  return sentence;
};

/**
 * solution 2
 * faster than 73.33%
 * 116ms
 */
var replaceWords = function (dict, sentence) {
  return sentence.replace(new RegExp(`\\b(${dict.join("|")})\\w+\\b`, "g"), "$1");
};

/**
 * solution 3
 * 156ms
 */
var Trie = function () {
  this.children = {};
  this.isWord = false;
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
  var cur = this;
  for (var i = 0; i < word.length; i++) {
    var c = word[i];
    if (!cur.children[c]) {
      cur.children[c] = new Trie();
    }
    cur = cur.children[c];
  }
  cur.isWord = true;
};

Trie.prototype.search = function (word) {
  var cur = this;
  var rootString = ''
  for (var i = 0; i < word.length; i++) {
    var c = word[i];
    rootString += c;
    const root = cur.children[c]
    if (root == null) {
      return word;
    }
    if (root.isWord) {
      return rootString;
    }
    cur = cur.children[c];
  }
  return word;
};


/**
* @param {string[]} dict
* @param {string} sentence
* @return {string}
*/
var replaceWords = function (dict, sentence) {
  const trie = new Trie()
  for (let root of dict) {
    trie.insert(root);
  }
  const sentenceArray = sentence.split(" ");
  return sentenceArray.map((successor) => {
    return trie.search(successor);
  }).join(" ");
};