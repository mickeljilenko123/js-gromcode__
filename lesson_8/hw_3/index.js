// input: object
//output: object

const obj = {
    age: 28,
    city: "Varva"
}

const key = 'name';
const value = 'Misha';

const addPropertyV1 = (obj, key) => {
    obj[key] = value;
    return obj;
}
console.log(addPropertyV1(obj, key));


const addPropertyV2 = (obj, key) => {
    const newObj = Object.assign(obj, {
        [key]: value
    });
    return newObj;
}
console.log(addPropertyV2(obj, key));



const addPropertyV3 = (obj, key) => {
    const newObj = Object.assign({}, obj, {
        [key]: value
    });
    // obj[key] = value;
    return newObj;
}
console.log(addPropertyV3(obj, key));



const addPropertyV4 = (obj, key) => {
    const newObj = Object.assign({...obj }, {
        [key]: value
    });
    return newObj;
}
console.log(addPropertyV4(obj, key));