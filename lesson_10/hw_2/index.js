// input: length future array == n, start, end
// output: array.length === n

const start = 1;
const end = -10;
const length = 4;

const getRandomNumbers = (start, end, length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        let rand = start + Math.random() * (end - start);
        rand = Math.round(rand);
        arr.push(rand);
    }
    return arr;
}
console.log(getRandomNumbers(start, end, length));