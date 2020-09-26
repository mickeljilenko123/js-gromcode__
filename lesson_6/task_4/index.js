const num = [2, 4, 6, 7];

const swap = (arr) => {
    const [start, ...rest] = arr;
    return [...rest, start];
}
const res = swap(num);
console.log(res);