const text = 'mynameisvasya';
const num = 4;
const splitString = (text, num = 10) => {

    let subStr1 = 0;
    while (true) {
        let srtText = text.substr(subStr1, num);
        console.log(srtText);
        subStr1 += num;
    }
};
console.log(splitString(text, num));