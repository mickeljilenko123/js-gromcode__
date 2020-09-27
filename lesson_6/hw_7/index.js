const arr = [2, 4, 5, 6];

const cloneArr = (arr) => {
    const [...arr1] = arr;
    return arr1;
}

const res = cloneArr(arr);
console.log(res);