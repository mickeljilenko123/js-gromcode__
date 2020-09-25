const sum = (from, to) => {
    let sum = 0;
    while (from <= to) {
        sum += from;
        from++;
    }
    return sum;
}

function compareSums(a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
        return false;
    }
}
const result = compareSums(10, 5, 7, 6);
console.log(result);