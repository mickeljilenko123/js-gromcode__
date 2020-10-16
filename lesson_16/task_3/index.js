//input: number
//output: array



export const createArrayOfFunctions = (num) => {
    if (typeof number !== num) {
        return null;
    }
    let arr = [];

    for (let i = 0; i <= num; i++) {
        arr[i] = function() {
            return i;
        };
    }
    return arr;
}
createArrayOfFunctions(7)[7]();