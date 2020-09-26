const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] += delta;
        }
    }
}
const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
const res = increaseEvenEl(arr, delta);
console.log(res);