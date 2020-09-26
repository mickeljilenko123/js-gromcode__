const m = 2;
const n = 45;
let a = m;
let result = 0;

while (a <= n) {
    if (a % 2 === 0 && a % 4 !== 0) {
        result += a;
    } else if (a % 2 === 0 && a % 4 === 0) {
        result += a;
    } else if (a % 4 === 0) {
        result *= a;
    } else if (a % 3 === 0) {
        result -= a;
    } else if (a % 3 === 0 && a % 5 === 0) {
        result -= a;
    }
    if (a % 5 === 0) {
        console.log(a);
    }
    a++;
}
// console.log(result);