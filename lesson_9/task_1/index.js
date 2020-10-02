const obj1 = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}

const getAdults = (obj) => {
    const arr1 = Object.entries(obj)
        .filter((e) => e[1] >= 18);
    return arr1.map((e) => e[0]);
}
console.log(getAdults(obj1));