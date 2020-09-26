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
const square = squareArray([2, 4, 8, 9]);
console.log(square);