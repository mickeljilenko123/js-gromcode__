import { calc } from './calculator.js';

it('should get not string', () => {
    const result = calc(4);
    expect(result).toEqual(null);
});

it('should get +', () => {
    const res = calc('1 + 2');
    expect(res).toEqual('1 + 2 = 3');
});

it('should get -', () => {
    const res = calc('3 - 2');
    expect(res).toEqual('3 - 2 = 1');
});

it('should get *', () => {
    const res = calc('2 * 2');
    expect(res).toEqual('2 * 2 = 4');
});

it('should get /', () => {
    const res = calc('6 / 2');
    expect(res).toEqual('6 / 2 = 3');
});