// 1. input array
// 2. output num
// 
const arr = [2, 2, 3, 3, 4, 4, 5]

const uniqueCount = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const arr = [2, 2, 3, 3, 4, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > i) {
            console.log(arr[i]);
        }
    }
}