const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
    agent: {
        country: 'Ukraine',
        company: 'NYSE'
    },
    'operation time': 1584029990001
};

console.log(transaction.currency);
console.log(transaction['value']);

const key = 'operation';
console.log(transaction[key]);



/* выведите в консоль значение свойства 'company' используя квадратные скобки */

/* выведите в консоль значение свойства 'country' используя точку */

/* выведите в консоль значение свойства 'operation time' используя квадратные скобки */


const product = {
    name: "Tom",
    age: 29,
};
for (const key in product) {
    console.log(key);
}