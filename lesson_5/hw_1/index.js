const getSum = (a, b) => {
    let sum = 0;
    while (a < b) {
        if (a % 2 === 0) {
            sum += a;
        }
        a++
    }
    return sum;
}
const res = getSum(2, 15);
console.log(res);