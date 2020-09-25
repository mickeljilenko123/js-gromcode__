let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum += i;
}
let c = sum / 1234;
// console.log(c); //406
let d = sum % 1234;
// console.log(d); //730

let bool = (c > d) || (c < d);
console.log(bool);