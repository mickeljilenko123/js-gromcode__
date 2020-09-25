const increaser = (a, index) => {
    while (a < index) {
        a += index;
    }
    return a;
}
const res = increaser(2, 10);
console.log(res);