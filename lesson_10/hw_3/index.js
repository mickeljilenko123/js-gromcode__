const num1 = -5.149;
const num2 = 2;

const superRound = (num1, num2) => {
    const abs = Math.abs(num1);
    const arr = [
        Math.floor(abs),
        Math.round(abs),
        Math.ceil(abs),
        Math.trunc(abs), +abs.toFixed(num2),
    ];
    return arr;
}
console.log(superRound(num1, num2));