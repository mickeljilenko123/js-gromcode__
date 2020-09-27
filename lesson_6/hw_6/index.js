const reverseArray = (arr1) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const reverseArray = arr1.reverse();
    return reverseArray;
}

const arr = [2, 6, 7, 25, 8, 9];
const [...arr1] = arr;
const res = reverseArray(arr1);
console.log(res);