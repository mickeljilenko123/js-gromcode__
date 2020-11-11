// const asyncCalculator = numbr =>
//     new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Initial value: ${numbr}`)
//             resolve(numbr);
//         }, 5000)
//     })
//     .then(value => new Promise((resolve) => {
//         setTimeout(() => {
//             const result = value * value;
//             console.log(`Squared value: ${result}`);
//             return resolve(result)
//         }, 5000)
//     }))
//     .then(value =>
//         new Promise((resolve) => {
//             const result = value * 2;
//             console.log(`Doubled value: ${result}`);
//             return resolve(result);
//         }))
// asyncCalculator(5);

// export { asyncCalculator }

export const asyncCalculator = (numbr) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Initial value: ${numbr}`);
            resolve(numbr);
        }, 500);
    })
    .then(
        (result) =>
        new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Squared value: ${result * result}`);
                return resolve(result * result);
            }, 500);
        })
    )
    .then(
        (result) =>
        new Promise((resolve) => {
            console.log(`Doubled value: ${result * 2}`);
            return resolve(result * 2);
        })
    );

asyncCalculator(5);