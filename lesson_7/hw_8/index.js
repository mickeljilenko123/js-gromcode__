const numbers = [2, 4, 6, 8];

const arrAverage = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((acc, elem) =>
        acc + elem / arr.length, 0)
}
console.log(arrAverage(numbers));