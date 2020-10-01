const obj1 = { a: 17 }
const obj2 = { a: 20, b: 55 }

const mergeObjectsV1 = (obj1, obj2) => {
    const obj3 = Object.assign({}, obj1, obj2);
    return obj3;
}
console.log(mergeObjectsV1(obj1, obj2));

const mergeObjectsV2 = (obj1, obj2) => {
    const obj3 = Object.assign({}, obj2, obj1);
    return obj3;
}
console.log(mergeObjectsV1(obj1, obj2));

const mergeObjectsV3 = (obj1, obj2) => {
    let obj3 = {...obj1 };
    obj3 = {...obj2 };
    return obj3
}
console.log(mergeObjectsV1(obj1, obj2));

const mergeObjectsV4 = (obj1, obj2) => {
    let obj3 = {...obj2 };
    obj3 = {...obj1 };
    return obj3
}
console.log(mergeObjectsV1(obj1, obj2));