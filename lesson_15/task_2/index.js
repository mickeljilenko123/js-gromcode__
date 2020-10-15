export function createCalculator() {
    let num = 0;
    const obj = {
        add(num1) {
            return num += num1;
        },
        decrease(num2) {
            return num -= num2;
        },
        reset() {
            return num = 0;
        },
        getMemo() {
            return num;
        },
    };
    return obj;
}
const add1 = createCalculator();
console.log(add1.add(6));
const decrease1 = createCalculator();
console.log(decrease1.decrease(2));
const reset1 = createCalculator();
console.log(reset1.reset());
const getMemo1 = createCalculator();
console.log(getMemo1.getMemo());