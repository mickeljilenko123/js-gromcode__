const obj = { a: 1 };
const name = 'Vasia';

const addPropertyV1 = (obj, key) => {
    obj['name'] = name;
    return obj;
};
console.log(addPropertyV1(obj, name));

const addPropertyV2 = (obj, name) => {
    const obj1 = { name: 'Vasia' }
    const arr = Object.assign(obj, obj1);
    return arr;
}
console.log(addPropertyV2(obj, name));

const addPropertyV3 = (obj, name) => {
    const obj1 = { name: 'Vasia' }
    const arr1 = Object.assign({}, obj, obj1);
    return arr1;
}
console.log(addPropertyV2(obj, name));

const addPropertyV4 = (obj, name) => {
    const obj1 = {...obj };
    return obj1;
}
console.log(addPropertyV4(obj, name));