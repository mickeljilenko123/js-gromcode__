const numbers = [2.3, 2.5, -50, -99];

const getMaxAbsoluteNumber = num => {
    const absoluteNum = num.map(e => Math.abs(e));
    const max = Math.max(...absoluteNum);
    return max;
};
console.log(getMaxAbsoluteNumber(numbers));