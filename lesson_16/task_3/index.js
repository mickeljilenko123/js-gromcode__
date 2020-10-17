//input: number
//output: array



const createArrayOfFunctions = (num) => {

    if (typeof number !== num) {
        return null;
    }

    var arr = [];

    for (let i = 0; i <= num; i++) {
        arr[i] = function() {
            console.log(i);
        };
    }
    console.log(arr);
    return arr;
}
createArrayOfFunctions(7);