const obj = { a: 1, b: 2, c: 3 };
const arr1 = ['a', 'c'];

const pickProps = (obj, arr) => {
    const arr2 = {};

    for (let key in obj) {
        if (arr.includes(key)) {
            arr2[key] = obj[key];
        }
    }
    return arr2;
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