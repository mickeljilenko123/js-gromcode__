export const getSquaredArray = arr => {
    return arr.map(e => {
        return e * e;
    })
}

export const getOddNumbers = arr => {
    return arr.filter(e => {
        return e % 2 === 1;
    })
}

export default (a, b) => {
    return a + b;
}