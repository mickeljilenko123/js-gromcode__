const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создайте промис и присвойте переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */
export const resultPromise = (...promiseNumbers) =>
    Promise.all(promiseNumbers).then(numbers => getSum(numbers))

const getSum = numbers => {
    return numbers.reduce((acc, num) => acc + num, 0);
}

resultPromise(promiseNumber1, promiseNumber2, promiseNumber3)
    // .then(numbersList => {
    //     console.log(numbersList);
    // })
    .then(result => {
        console.log(result); // 98
    });