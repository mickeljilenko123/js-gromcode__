const increaser = (a, index) => {
    if (a <= index) {
        return a += index;
    } else {
        return a;
    }
}
const res = increaser(2, 10);
console.log(res);