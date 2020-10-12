import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get min square number of array', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    expect(result).toEqual(4);
})