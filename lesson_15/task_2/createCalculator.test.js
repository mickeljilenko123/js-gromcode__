import { createCalculator } from './createCalculator.js';

it('should check add()', () => {
    const result = createCalculator(add(6));
    expect(result).toEqual(6);
});