const convertToRoman = function(n) {
    var numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var strArr = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    let newStr = "";

    for (let i = 0; i < numArr.length; i++) {
        // console.log(numArr[i]);

        while (numArr[i] <= n) {
            console.log(numArr[i]);

            newStr += strArr[i];

            console.log(newStr);

            n -= numArr[i];
        }
    }

    return newStr;
};

// test here
console.log(convertToRoman(36));