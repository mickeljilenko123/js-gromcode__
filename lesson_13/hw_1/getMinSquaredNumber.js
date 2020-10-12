export const getMinSquaredNumber = arr => {
    const arr1 = arr.map(e => Math.abs(e));
    const min = Math.min(...arr1);
    return min * min;
}