it('17 равно 17', () => {
    expect(17).toEqual(17);
});

it('18 не равно 17', () => {
    expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => {
    return arr.filter(e => {
        return e % 2 === 0;
    })
}
it('should get only even numbers from array', () => {
    const result = getEvenNumbers([1, 2, 3, 4]);
    expect(result).toEqual([2, 4]);
})