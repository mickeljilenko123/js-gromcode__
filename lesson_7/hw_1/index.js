const numbers = [2, 5, 7, 9];

const squareArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return numbers.map((elem) => elem * elem);
}
console.log(squareArray(numbers));