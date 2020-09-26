const numbers = [2, 4, 6, 8, 9];
const [...copySquare] = numbers;
const squareArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let square = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
        square.push(arr[i]);
    }
    return square;
}
const square = squareArray(copySquare);
console.log(square);