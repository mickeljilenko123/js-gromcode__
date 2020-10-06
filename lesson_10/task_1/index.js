// round - 17,4 (17) если 17,5 (18);
// floor - 17,9 (17)
// ceil - 17,1 (18)
// trunc - 17,7 (17)
const numbers = ['2,12jd', '16f', '24g', 2, 2.3, 15.8]
const getFiniteNumbers = num =>
    num.filter(e => Number.isFinite(e))
console.log(getFiniteNumbers(numbers));

const getFiniteNumbersV2 = num =>
    num.filter(e => isFinite(e))
console.log(getFiniteNumbersV2(numbers));

const getNaN = num =>
    num.filter(e => Number.isNaN(e))
console.log(getNaN(numbers));

const getNaNV2 = num =>
    num.filter(e => isNaN(e))
console.log(getNaNV2(numbers));

const getIntegers = num =>
    num.filter(e => Number.isInteger(e))
console.log(getIntegers(numbers));