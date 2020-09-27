const num = [2, 4, 5, 6];

const cloneArr = (arr) => {

    if (!Array.isArray(arr)) {
        return null;
    }

    const [...arr1] = num;
    return arr1;
}

const res = cloneArr(num);
console.log(res);