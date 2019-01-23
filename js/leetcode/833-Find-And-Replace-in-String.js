/**
 * 833: https://leetcode.com/problems/find-and-replace-in-string/submissions/
 */
/**
 * solution 1: 112ms, faster than 0.00% ...
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  const startStr = S;
  const startIndexes = indexes.slice();
  indexes.sort((a, b) => b - a);
  let resStr = S;
  const replaceString = (s, index, source, target) => {
    const len = source.length;
    const subStr = startStr.substr(index, len);
    if (subStr === source) {
      const left = resStr.slice(0, index);
      const right = resStr.slice(index + source.length);
      return `${left}${target}${right}`
    } else { 
        return s;
    }
  }
  indexes.forEach((index) => {
    const j = startIndexes.indexOf(index);
    resStr = replaceString(resStr, index, sources[j], targets[j]);
  });
  return resStr;
};

/**
 * solution 2: 84ms
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = module.exports = function(S, indexes, sources, targets) {

  let N = S.length;
  let match = Array(N).fill(-1);
  for (let i = 0; i < indexes.length; ++i) {
      let ix = indexes[i];
      if (S.substring(ix, ix + sources[i].length) == sources[i])
          match[ix] = i;
  }

 ans = [];
  let ix = 0;
  while (ix < N) {
      if (match[ix] >= 0) {
          ans.push(targets[match[ix]]);
          ix += sources[match[ix]].length;
      } else {
          ans.push(S.charAt(ix++));
      }
  }
  return ans.join("");
};