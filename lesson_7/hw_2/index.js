const numbers = [2, 5, 8, 3, 9];

const reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const num = [...numbers];
    return num.reverse();
}
console.log(reverseArray(numbers));