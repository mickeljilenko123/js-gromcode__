const numbers = -2.15460;
const multiRound = num =>
    // const numAbs = Math.abs(num);
    [
        Math.floor(num),
        Math.round(num),
        Math.ceil(num),
        Math.trunc(num), +num.toFixed(2),
    ];


console.log(multiRound(numbers));