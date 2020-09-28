const arr = [11, 4, 8, 3];
let num = 3;

const getSubArray = (arr, num) => {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i]) === num) {
            return
        }
    }
}
console.log(getSubArray(arr));