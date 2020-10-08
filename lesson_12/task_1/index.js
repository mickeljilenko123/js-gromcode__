const str = '1 + 2';

const calc = str => {
    const a = str.split(' ');
    switch (a[1]) {
        case '+':
            return Number(a[0]) + Number(a[2]);
        case '-':
            return a[0] - a[2];
        case '*':
            return a[0] * a[2];
        case '/':
            return a[0] / a[2];
    }
}
const result = calc(str);
console.log(str + ' = ' + result);