/**
 * 205: https://leetcode.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const sLen = s.length;
  const mapObjS = {};
  const mapObjT = {};
  for (let i = 0; i < sLen; i++) {
      const sWord = s[i];
      const tWord = t[i];
      if (mapObjS[sWord] !== mapObjT[tWord]) return false;
      mapObjS[sWord] = i;
      mapObjT[tWord] = i;
  }
  return true;
};
