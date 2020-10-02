const obj1 = {
    a: 1,
    b: 2,
};


const copyObj = (obj) => {
    const user = {...obj };
    return user;
}
console.log(copyObj(obj1));