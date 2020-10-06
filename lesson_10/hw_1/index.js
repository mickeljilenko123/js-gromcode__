const numbers = [1, 2, 5.5, 4.259, 45]

const getTotalPrice = arr => {
    const arr1 = arr.reduce((acc, e) => {
        return acc + e
    }, 0);
    console.log('$' + arr1.toFixed(2));
    return arr1;
}
getTotalPrice(numbers);