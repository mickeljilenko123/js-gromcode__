const obj1 = {
    name: 'Tom',
    age: 29,
    sayHi() {
        console.log('Hi');
    }
};

const getOwnProps = (obj) => {
    return Object.keys(obj);
}

export { getOwnProps }