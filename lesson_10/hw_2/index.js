const numbers = [1, 5];

const getRandomNumbers = (arr, start, end) => {
    let rand = start + Math.random() * (end - start);
    return Math.floor(rand);
}

console.log(getRandomNumbers(numbers));