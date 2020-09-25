const sum = (from, to) => {
    let sum = 0;
    while (from <= to) {
        sum += from;
        from++;
    }
    return sum;
}

function compareSums(a, b, c, d) {
    let bool = (sum(a, b) > sum(c, d)) && (sum(a, b) < sum(c, d));
    return bool;
}
const result = compareSums(2, 5, 7, 6);
console.log(result);