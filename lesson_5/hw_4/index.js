const findDivCount = (a, b, n) => {
    let i = 0;
    while (a <= b) {
        if (a % n === 0) {
            i++;
        }
        a++;
    }
    return i;
}
const result = findDivCount(2, 8, 3);
console.log(result);