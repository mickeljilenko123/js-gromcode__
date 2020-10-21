function calculator(a, b) {
    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        default:
            return NaN;
    }
};


/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */
// ...your code here

const getAction = {
    operation: '*',
};

const multiplier = calculator.bind(getAction);

console.log(multiplier(3, 3));

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here

const getAction2 = {
    operation: '+',
};

const summator = calculator.bind(getAction2);
console.log(summator(5, 5));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here

const getAction3 = {
    operation: '*',
};

const twice = calculator.bind(getAction3, 2);
console.log(twice(10));

export { multiplier, summator, twice };