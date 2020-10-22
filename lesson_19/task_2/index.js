const obj1 = {
    name: 'Tom',
    age: 29,
};

const getOwnProps = (obj) => {
    return Object.keys(obj);
}

export { getOwnProps }