const numbers = -2.5;
const multiRound = num => {
    const numAbs = Math.abs(num);
    const arr = [
        Math.floor(numAbs),
        Math.round(numAbs),
        Math.ceil(numAbs),
        Math.trunc(numAbs), +numAbs.toFixed(1),
    ];
    return arr;
}
console.log(multiRound(numbers));