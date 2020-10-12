export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || (arr.length == 0)) {
        return null;
    }
    const arr1 = arr.map(e => Math.abs(e));
    const min = Math.min(...arr1);
    return min * min;
}