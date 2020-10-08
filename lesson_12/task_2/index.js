const str = 'hello';

const reverseString = str => {
    if (str !== 'string') {
        return null;
    }
    return str.split("").reverse().join("");
}
console.log(reverseString(str));