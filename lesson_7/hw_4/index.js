const numbers = [2, 3, 7, 8, 9];

const cloneArr = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const num = [...numbers];
    return num;
}
console.log(cloneArr(numbers));