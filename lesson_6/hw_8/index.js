const num = [2, 4000, 9, 4, 6, 2];
const [...num1] = num;

const getMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
getMax(num1);

const getMin = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
getMin(num1);

const checker = (num1) => {
    if ((getMin(num1) + getMax(num1)) > 1000) {
        return true;
    } else {
        return false;
    }
}
console.log(checker(num1));