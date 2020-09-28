// How to work on tech tasks.Step by step guide
// 1. Learn requirements
// 2. Create step by step algo( & input / output
//     for funtions)
// 3. Create prototype solution & testing
// 4. Final testing & refactoring - > final solution



const arr = [2, 3, 3, 4, 4];
const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArray.indexOf(arr[i])) {
            return newArray;
        } else {
            return newArray.push(arr[i]);
        }
    }
}
console.log(removeDuplicates(arr));