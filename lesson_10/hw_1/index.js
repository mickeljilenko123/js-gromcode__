const numbers = [1, 2, 5.5, 4.125, 45]

const getTotalPrice = arr => {
    const arr1 = arr.reduce((acc, e) => {
        return acc + e
    }, 0);
    Math.floor(arr1);
    console.log('$' + arr1.toFixed(2));
    return arr1;
}
getTotalPrice(numbers);