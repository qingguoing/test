// 781: https://leetcode.com/problems/rabbits-in-forest/

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const len = answers.length;
  const obj = {};
  let res = 0;
  for (let i = 0; i < len; i++) {
      const num = answers[i];
      if (!obj[num]) {
          obj[num] = num;
          res += num;
          res += 1;
      } else {
          obj[num]--;
      }
  }
  return res;
};