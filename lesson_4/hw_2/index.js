const m = 2;
const n = 45;
let a = m;
let result = 0;

while (a <= n) {
    if (a % 2 === 0 && a % 4 !== 0) {
        result += a;
    }
    if (a % 3 === 0) {
        result -= a;
    }
    if (a % 4 === 0) {
        result *= a;
    }
    if (a % 5 === 0) {
        console.log(a);
    }
    a++;
}