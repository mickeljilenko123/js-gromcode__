const asyncCalculator = numbr =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value: ${numbr}`)
            resolve(numbr);
        }, 5000)
    })
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            return resolve(result)
        }, 5000)
    }))
    .then(value =>
        new Promise((resolve) => {
            const result = value * 2;
            console.log(`Doubled value: ${result}`);
            return resolve(result);
        }))
asyncCalculator(5);

export { asyncCalculator }