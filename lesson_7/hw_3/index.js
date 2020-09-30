const numbers = [2, 5, 6, 8, 11, 9, 4];
const number = 20;

const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.map((elem) => (elem % 2 === 0) ? elem + delta : elem);
};
console.log(increaseEvenEl(numbers, number));