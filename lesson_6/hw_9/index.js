const num = [2, 15, 3, 10, 8];
const [...num1] = num;
const sortAsc = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let n = 0; n < num1.length; n++) {
        for (let i = 0; i < num1.length - 1; i++) {
            if (num1[i] > num1[i + 1]) {
                let sort = num1[i];
                num1[i] = num1[i + 1];
                num1[i + 1] = sort;
            }
        }
    }
    return num1;
}
console.log(sortAsc(num1));


const sortDesc = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let n = 0; n < num1.length; n++) {
        for (let i = 0; i < num1.length - 1; i++) {
            if (num1[i] < num1[i + 1]) {
                let sort = num1[i];
                num1[i] = num1[i + 1];
                num1[i + 1] = sort;
            }
        }
    }
    return num1;
}
console.log(sortDesc(num1));