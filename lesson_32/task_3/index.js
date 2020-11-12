/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = num => {
        return new Promise(resolve => {
            resolve(num);
        })
    }
    // const makePromise = Promise.resolve(num);

/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });