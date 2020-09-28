// input arr, num
// output 
//1. Проходимся циклом по массиву 
//2. Пушим каждый эл массива в новый массив пока i < num;
const arr = [11, 4, 8, 3];
let num = 3;
const getSubArray = (arr, num) => {
    let arr1 = [];
    let num1 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num1 === num) {
            console.log(arr[i]);
        }
    }
}
console.log(getSubArray(arr));