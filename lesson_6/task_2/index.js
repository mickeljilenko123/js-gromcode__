const num = [2, 4, 6, 7]
const getSum = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const res = getSum(num);
console.log(res);