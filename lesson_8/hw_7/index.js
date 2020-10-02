const obj1 = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

const getAdults = (obj) => {
    const obj2 = {};
    Object.keys(obj1).filter((e) => {
        if (obj1[e] >= 18) {
            obj2[e] = obj1[e];
        }
    })
    return obj2;
}
console.log(getAdults(obj1));