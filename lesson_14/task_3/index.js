let num1 = 0;
export function add(num) {
    return num1 += num;
}
export function decrease(num2) {
    return num2 -= num1;
}
export function reset() {
    return num1 = 0;
}
export function getMemo() {
    return num1;
}

console.log(add(4));
console.log(decrease(8));
console.log(getMemo());
console.log(reset());