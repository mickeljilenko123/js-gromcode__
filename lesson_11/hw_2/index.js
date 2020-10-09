const str = '123.2323.2321.453';
const n = '.';

const countOccurrences = (str, n) => {
    if (n == '') return null;
    const count = (str.split(n).length - 1);
    console.log(str);
    return count;

}
console.log(countOccurrences(str, n));