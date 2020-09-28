const arr = [2, 3, 5, 6];
const num = 6;

const includes = (arr, num) => {
    if (arr.includes(num)) {
        return true;
    } else {
        return false;
    }
}
console.log(includes(arr, num));