const obj1 = {
    'John Doe': 17,
    'Tom': 17,
    'Bob': 17,
}

const getAdults = (obj) => {
    const obj2 = {};
    Object.keys(obj).filter((e) => {
        if (obj[e] >= 18) {
            obj2[e] = obj[e];
        }
    })
    return obj2;
}
console.log(getAdults(obj1));