var runningSum = function(nums) {
    return nums.reduce((acc, cur, index) => {
        const preValue = acc[index - 1] || 0;
        acc.push(preValue + cur);
        return acc;
    }, []);
};
