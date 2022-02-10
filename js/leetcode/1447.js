/**
 * @param {number} n
 * @return {string[]}
 */

const simplifiedFractions = function (n) {
  if (n === 1) return [];

  const res = [`1/${n}`];
  for (let i = 2; i < n; i++) {
    if (gcd(n, i) === 1) {
      res.push(`${i}/${n}`);
    }
  }
  return [...res, ...simplifiedFractions(n - 1)];
};

const gcd = (a, b) => {
  if (b === 0) {
      return a;
  }
  return gcd(b, a % b);
}

/**
 * solution 2
 * @param {*} n 
 * @returns 
 */
var simplifiedFractions = function(n) {
  const ans = [];
  for (let denominator = 2; denominator <= n; ++denominator) {
      for (let numerator = 1; numerator < denominator; ++numerator) {
          if (gcd(numerator, denominator) == 1) {
              ans.push(numerator + "/" + denominator);
          }
      }
  }
  return ans;
};

const gcd = (a, b) => {
  if (b === 0) {
      return a;
  }
  return gcd(b, a % b);
}

