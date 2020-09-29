const arr = [2, 4, 3, 6];

const getSpecialNumbers = (numbers) =>
    numbers.filter((num) => num % 3 === 0);

console.log(getSpecialNumbers(arr));