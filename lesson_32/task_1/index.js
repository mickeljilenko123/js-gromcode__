const getValueWithDelay = (value, delay) =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })

const asyncValue1 = getValueWithDelay(54, 1000);
const asyncValue2 = getValueWithDelay(undefined, 1000);
const asyncValue3 = getValueWithDelay('16', 1000);

const getNum = numbers => {
    numbers
        .filter(value => !isNaN(value))
        .reduce((acc, num) => acc + Number(num), 0);

}

const asyncSum = (...asyncValues) => {
    return Promise.all(asyncValues)
        .then(numbers => getNum(numbers))
        .catch(() => Promise.reject(new Error('Can\t calculate')));
};


asyncSum(asyncValue1, asyncValue2, asyncValue3)
    .then(result => console.log(result));
export { asyncSum }