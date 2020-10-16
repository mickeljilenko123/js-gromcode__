//input: number
//output: array



export const createArrayOfFunctions = (num) => {

    if (typeof number !== num) {
        return null;
    }


    var arr = [];

    for (let i = 0; i <= num; i++) {
        arr[i] = function() {
            return i;
        };
    }
    return arr;
}
createArrayOfFunctions(7)[7]();



if (typeof number !== num) {
    return null;
}