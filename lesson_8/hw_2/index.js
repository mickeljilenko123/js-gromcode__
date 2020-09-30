const obj1 = {
    age: 18,
    name: 'Misha'
};

const getKeys = (obj) => {
    const arr = Object.keys(obj);
    return arr.forEach(e => {
        console.log(e);
    })
}
getKeys(obj1);