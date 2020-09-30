const numbers = [2, 5, 6, 3];

const arrAverage = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reduce((acc, elem) =>
        acc + elem / arr.length, 0)
}
console.log(arrAverage(numbers));