const arr = [2, 4, 5, 6];

const cloneArr = (arr) => {

    if (!Array.isArray(arr)) {
        return null;
    }

    const [...arr1] = arr;
    return arr1;
}

const res = cloneArr(arr);
console.log(res);