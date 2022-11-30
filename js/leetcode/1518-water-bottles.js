// 1518: https://leetcode-cn.com/problems/water-bottles/

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    if (numBottles < numExchange) return numBottles;

    const test = (emptyNum) => {
        if (emptyNum < numExchange) return 0;
        const bottles = parseInt(emptyNum / numExchange);
        const restBottles = emptyNum % numExchange;

        return bottles + test(bottles + restBottles);
    }

    return numBottles + test(numBottles);
};