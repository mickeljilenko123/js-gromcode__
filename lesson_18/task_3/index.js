export function sumOfSquares() {
    return [...arguments].reduce((acc, e) => {
        return acc += e;
    }, 0)
};
sumOfSquares(2, 5, 8, 4, 1);