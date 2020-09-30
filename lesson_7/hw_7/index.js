const arr1 = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
const text1 = 'ya';
const filterNames = (arr, text) =>
    arr.filter(elem =>
        (elem.includes(text) && elem.length > 5));
console.log(filterNames(arr1, text1));