const numbers = [2.3, 2.5, -50, -99];

const getMaxAbsoluteNumber = arr => {
    if (!Array.isArray(arr) && (!arr.length === 0)) {
        return null;
    }
    const absoluteNum = arr.map(e => Math.abs(e));
    const max = Math.max(...absoluteNum);
    return max;
};
console.log(getMaxAbsoluteNumber(numbers));