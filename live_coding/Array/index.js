let arr = [2, 2, 2];

const arr1 = arr.reduce((acc, e) => {
    return acc + e;
}, 0);

console.log(arr1);


var a;
a = 17;

function getNum(a) {
    var a = 1;
    var a = 2;
    console.log(a);
}
console.log(getNum(5));
console.log(a);



let a = {
    name: 'Roman'
};
let b = a;
let c = {
    name: 'Pasha'
}
a.name = 'Test';
b.name = 'Filip';
console.log(c);
c = a;
console.log(a); // "Test"
console.log(c);