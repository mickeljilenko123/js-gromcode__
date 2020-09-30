const numbers = [2, 5, 8, 3, 9];


const reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.reverse();
}
console.log(reverseArray(numbers));