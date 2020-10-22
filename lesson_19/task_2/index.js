const obj1 = {
    name: 'Tom',
    age: 29,
};

function getOwnProps(obj) {

    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return [prop];
        };
    };
};
console.log(getOwnProps(obj1));
export { getOwnProps }