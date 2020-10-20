export function calculator(a, b) {

    switch (this.operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
        case 'n':
            return a * 2;
        default:
            return NaN;
    }
}


/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

const multiplier = calculator.bind({ operation: '*' }, 4, 5);
console.log(multiplier());


/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */
// ...your code here
const summator = calculator.bind({ operation: '+' }, 4, 5);
console.log(summator());
/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */
// ...your code here


const twice = calculator.bind({ operation: 'n' }, 4);
console.log(twice());
export { multiplier, summator, twice }