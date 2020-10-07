const num1 = 5.149;
const num2 = 2;

const superRound = (num1, num2) => {
    const arr = [
        Math.floor(num1),
        Math.round(num1),
        Math.ceil(num1),
        Math.trunc(num1), +num1.toFixed(num2),
    ];
    return arr;
}
console.log(superRound(num1, num2));