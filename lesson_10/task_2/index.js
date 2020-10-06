const numbers = ['2.12jd', '16f', '24g', 2, 2.3, 15.8]

const getParsedIntegers = num =>
    num.map(e => Number.parseInt(e))
console.log(getParsedIntegers(numbers));

const getParsedIntegersV2 = num =>
    num.map(e => parseInt(e))
console.log(getParsedIntegersV2(numbers));

const getParsedFloats = num =>
    num.map(e => Number.parseFloat(e))
console.log(getParsedFloats(numbers));

const getParsedFloatsV2 = num =>
    num.map(e => Number.parseFloat(e))
console.log(getParsedFloatsV2(numbers));