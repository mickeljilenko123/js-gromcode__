//input: array
//output: array

// 1. Фильтруем массив

const arr = ['  1.9 ', '16.4', 17, ' 1 dollar '];

const cleanTransactionsList = input =>
    input
    .map(e => '$' + Number(e).toFixed(2))
    .filter(e => e !== '$NaN');

console.log(cleanTransactionsList(arr));