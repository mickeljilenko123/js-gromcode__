const m = 15;
const n = 20;
let a = m;
let result = 1;

do {
    if (a % 2 === 1) {
        result *= a;
    }
    a++;
} while (a <= n);
console.log("Result: " + result);