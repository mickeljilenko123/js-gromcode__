const obj1 = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
}



const getAdults = (obj) =>
    Object.entries(obj)
    .filter((e) => e[1] >= 18)
    .map((e) => e[0])
console.log(getAdults(obj1));