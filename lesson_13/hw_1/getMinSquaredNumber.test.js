import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get not array', () => {
    const result = getMinSquaredNumber('notArray');
    expect(result).toEqual(null);
})

it('should get array', () => {
    const result = getMinSquaredNumber([]);
    expect(result).toEqual(null);
})

it('should get min square number of array', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
})