const m = 15;
const n = 20;
let s = m;
let result = 1;

do {
    if (s % 2 === 1) {
        result *= s;
    }
    s++;
} while (m <= n);
console.log("Result: " + result);