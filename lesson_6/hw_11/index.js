// How to work on tech tasks.Step by step guide
// 1. Learn requirements
// 2. Create step by step algo( & input / output
//     for funtions)
// 3. Create prototype solution & testing
// 4. Final testing & refactoring - > final solution

// input array
// output new array
//1. Создаем новый массив
//2. Пройтись циклом по массиву
//3. Есть ли тякущий эл массива в 2-м массиве
//4. Если тякущего эл нет в новом массиве тогда мы его пушим
//5. Если есть то мы его не пушим.

const arr = [2, 3, 3, 4, 4];
const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] === newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(removeDuplicates(arr));