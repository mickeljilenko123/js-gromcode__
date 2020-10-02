const obj = { a: 1, b: 2, c: 3 };
const arr1 = ['a', 'c'];
const pickProps = (obj, arr) => {
    const arr3 = {};
    Object.keys(obj).forEach((e) => {
        if (arr.includes(e)) {
            arr3[e] = obj[e];
        }
    });
    return arr3;

}
console.log(pickProps(obj, arr1));



// const data = [
//     {
//         a: { name: "vasya", age: 54 },
//         b: { name: "petya", age: 74 }
//     }
//     , {
//         c: { pet: 'dog', home: 'huy' },
//         d: { pet: 'cat', home: 'bazar' },
//         e: { pet: 'pig', home: 'ass' }
//     },
// ];