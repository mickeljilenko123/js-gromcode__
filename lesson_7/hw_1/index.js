const arr = [2, 5, 7, 9];

const squareArray = (numbers) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return numbers.map((elem) => elem * elem);
}
console.log(squareArray(arr));