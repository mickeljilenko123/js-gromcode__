const arr1 = ['a', 17.1, 'John Doe']
const transformToObject = (arr) => {
    const obj = {};
    arr.forEach(elem => {
        obj[elem] = elem;
    });
    return obj;
}
console.log(transformToObject(arr1));