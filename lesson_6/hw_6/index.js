const reverseArray = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const reverseArray = arr.reverse();
    return reverseArray;
}

const arr = [2, 6, 7, 25, 8, 9];
const res = reverseArray(arr);
console.log(res);