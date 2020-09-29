// input arr, num
// output 
//1. Проходимся циклом по массиву 
//2. Пушим каждый эл массива в новый массив пока i < num;
const arr = [11, 4, 8, 3];
let num = 3;
const getSubArray = (arr, num) => {

    let arr1 = [];

    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; n < num; n++) {
            console.log(n);
        }
    }
}
getSubArray(arr);

const arr = [11, 4, 8, 3];
let num = 3;
let arr1 = [];
let num1 = 0;
for (let i = 0; i < arr.length; i++) {
    num1++;
    if (num1 <= num) {
        arr1.push(arr[i])
    }
}
console.log(arr1);
return arr1;