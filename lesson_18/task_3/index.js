export function sumOfSquares() {
    return [...arguments].reduce((acc, e) => {
        return acc += e * e;
    }, 0)
};
console.log(sumOfSquares(2, 2));