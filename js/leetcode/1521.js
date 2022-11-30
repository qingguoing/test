/**
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function(n) {
    const getNumArr = (strArr, startZero = false) => {
        if (strArr.length === 1) return [strArr.join('')];
        const res = [];
        for (let i = 0; i < strArr.length; i++) {
            if (startZero && +strArr[i] === 0) continue;
            const tempArr = getNumArr([...strArr.slice(0, i), ...strArr.slice(i+1)]);
            for(let j = 0; j < tempArr.length; j++) {
                res.push(strArr[i] + tempArr[j]);
            }
        }
        return res;
    }

    const nStr = n.toString().split('');
    const numArr = getNumArr(nStr, true);
    for (let i = 0; i < numArr.length; i++) {
        const num = (+numArr[i]).toString(2);
        if (+num.slice(1) === 0) {
            return true;
        }
    }
    return false;
};
