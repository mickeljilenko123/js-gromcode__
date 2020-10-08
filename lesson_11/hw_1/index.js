// const text = 'mynameisvasyamynameisvasya';
// const num = 4;

// const splitString = (text, num = 10) => {
//     let arr = [];
//     let subStr1 = 0;
//     while (true) {
//         let srtText = text.substr(subStr1, num);
//         if (srtText.length === 0) {
//             break;
//         }
//         arr.push(srtText[0].toUpperCase() + srtText.slice(1));
//         subStr1 += num;
//     }
//     arr.join('\n');
//     return arr;
// };
// console.log(splitString(text, num));

// const str = "loremipsumdolorsitamet";
// const splitString = (str, length) => {
//     if (typeof str !== "string") return null;
//     if (length === undefined) {
//         const pattern = new RegExp(".{1," + 10 + "}", "ig");
//         let res = str.match(pattern).map((item) => item.padEnd(10, "."));

//         return res;
//     }
// };
// console.log(splitString(str, 4));