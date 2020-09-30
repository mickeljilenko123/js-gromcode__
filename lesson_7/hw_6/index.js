const numbers = [2, 4, 6, 8, 9, 19];

const sum = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sum(numbers));