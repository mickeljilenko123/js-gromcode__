const getSpecialNumbers = (m, n) => {
    let arr = [];
    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            arr.push(i)
        }
    }
    return arr;
}
const res = getSpecialNumbers(2, 10);
console.log(res);