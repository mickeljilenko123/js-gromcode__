const m = 2;
const n = 16;
let a = m;
let result = 0;

while (a <= n) {
    if (a % 5 === 0) {
        console.log('a % 5 === 0 ' + a);
    }
    if (a % 2 === 0 && a % 4 !== 0) {
        result += a;
        console.log('a % 2 === 0 && a % 4 !== 0 ' + result);
    }
    if (a % 3 === 0) {
        result *= a;
        console.log('a % 3 === 0 ' + result);
    }
    if (a % 4 === 0) {
        result -= a;
        console.log('a % 4 === 0 ' + result);
    }
    a++;
}
console.log(result);