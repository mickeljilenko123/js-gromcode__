const obj1 = { name: 'John Doe', age: 17, interest: 'football' }

const concatProps = (obj) => {
    let arr = [];
    for (const key in obj) {
        arr = arr.concat(obj[key])
    }
    return arr;
}
console.log(concatProps(obj1));