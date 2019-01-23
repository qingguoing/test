/**
 * https://leetcode.com/problems/find-and-replace-in-string/submissions/
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function(S, indexes, sources, targets) {
  // let i = 0;
  const startStr = S;
  let resStr = S;
  const replaceString = (s, index, source, target) => {
    const len = source.length;
    const subStr = startStr.substr(index, len);
    if (subStr === source) {
      
      const left = resStr.slice(0, index);
      const right = resStr.slice(index + source.length);
      if (index === 18) {
        console.log(resStr, startStr, index, source, left,target, right);
      }
      return `${left}${target}${right}`
    } else {
        return s;
    }
  }
  indexes.forEach((index, j) => {
      resStr = replaceString(resStr, index, sources[j], targets[j]);
  });
  return resStr;
};

console.log(findReplaceString("wreorttvosuidhrxvmvo", [14,12,10,5,0,18], ["rxv","dh","ui","ttv","wreor","vo"], ["frs","c","ql","qpir","gwbeve","n"]));