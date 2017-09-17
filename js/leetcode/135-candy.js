/**
 * created by qingguoing on 01/09/2017
 */
/**
 * https://leetcode.com/problems/candy/description/
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    ratings.sort((a, b) => a - b);
    let candies = 0;
    ratings.reduce((prev, cur, i) => {
        console.log(prev);
        candies += prev;
        if (ratings[i + 1] > cur) {
            return ++prev;
        } else {
            return prev;
        }
    }, 1);
    return candies;
};

console.log(candy([1, 2, 2]));
