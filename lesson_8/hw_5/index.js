const obj = { a: 1, b: 2, c: 3 };
const arr1 = ['a', 'c'];

const pickProps = (obj, arr) => {
    const arr2 = {};

    for (let key in obj) {
        if (arr.includes(key)) {
            console.log(key);
        }
    }
    return arr2;
}
pickProps(obj, arr1);