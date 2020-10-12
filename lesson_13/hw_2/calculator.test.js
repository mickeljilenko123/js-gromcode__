import { calc } from './calculator.js';

it('should get not string', () => {
    const result = calc(4);
    expect(result).toEqual(null);
});

it('should get string', () => {
    const res = calc('+');
    expect(res).toEqual(a + b);
});