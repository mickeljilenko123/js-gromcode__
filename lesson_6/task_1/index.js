const getArrayBounds = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrayBounds = getArrayBounds([12, 66, 23, 13]);
console.log(arrayBounds);