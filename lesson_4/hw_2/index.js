let m = 2;
const n = 45;
let result = 0;

while (m <= n) {
    if (m % 2 === 0 || m % 4 !== 0) {
        result += m;
        continue;
    }
    if (m % 3 === 0) {
        result -= m;
        continue;
    }
    if (m % 5 === 0) {
        console.log(m);
    }
    m++;
}
console.log(result);