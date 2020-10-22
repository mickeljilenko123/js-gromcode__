const obj = {
    name: 'Tom',
    age: 29,
};

const getOwnProps = (obj) => {
    return Object.keys(obj);
}
console.log(getOwnProps(obj));
export { getOwnProps }