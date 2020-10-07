const element = -5.149;
const n = 2;

function superRound(num, n) {
    let roundNumber = Math.pow(10, n);
    return [
        Math.floor(num * roundNumber) / roundNumber,
        Math.round(num * roundNumber) / roundNumber,
        Math.ceil(num * roundNumber) / roundNumber,
        Math.trunc(num * roundNumber) / roundNumber, +num.toFixed(n),
    ];
}
console.log(superRound(element, num));