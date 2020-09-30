// input [1,6,9,3];
// output [1,3,6,9];

const arr = [1, 16, 3, 9];

const sortDesc = (numbers) => {
    const copy = [...numbers];
    return copy.sort((a, b) => b - a);

};
console.log(sortDesc(arr));