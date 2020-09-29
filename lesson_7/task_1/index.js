const numbers = [2, 4, 3, 6];

const getSpecialNumbers = () => {
    return numbers.filter((num) => num % 3 === 0);
}
console.log(getSpecialNumbers(numbers));