import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
    const result = getSquaredArray([2, 4]);
    expect(result).toEqual([4, 16]);
});

it('should get odd numbers', () => {
    const result = getOddNumbers([1, 2, 3, 4]);
    expect(result).toEqual([1, 3]);
});

it('should get sum of numbers', () => {
    const result = getSum(8, 4);
    expect(result).toEqual(12);
});