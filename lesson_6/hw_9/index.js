const num = [2, 15, 3, 10, 8];
// const [...num1] = num;
const sortAsc = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let n = 0; n < num.length; n++) {
        for (let i = 0; i < num.length - 1; i++) {
            if (num[i] > num[i + 1]) {
                let sort = num[i];
                num[i] = num[i + 1];
                num[i + 1] = sort;
            }
        }
    }
    return num;
}
console.log(sortAsc(num));


const sortDesc = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let n = 0; n < num.length; n++) {
        for (let i = 0; i < num.length - 1; i++) {
            if (num[i] < num[i + 1]) {
                let sort = num[i];
                num[i] = num[i + 1];
                num[i + 1] = sort;
            }
        }
    }
    return num;
}
console.log(sortDesc(num));