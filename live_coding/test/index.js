const str = 'hello world';
const getStr = arr => {
    let arr1 = arr.split('');
    const arr4 = arr1.reduce((acc, e) => {
        return e + acc;
    }, );
    return arr4;
}
console.log(getStr(str));