const text = 'mynameisvasya';
const num = 4;

const splitText = (text, num = 10) => {
    if (!text == String) {
        return null;
    }
    let arr = [];
    let subStr1 = 0;
    while (true) {
        let srtText = text.substr(subStr1, num);
        if (srtText.length === 0) {
            break;
        }
        arr.push(srtText[0].toUpperCase() + srtText.slice(1));
        subStr1 += num;
    }
    return arr.join('\n');
};
console.log(splitText(text, num));