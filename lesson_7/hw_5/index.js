'use strict';

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
const client = 'John';
const amount = 50;

const withdraw = (clients, balances, client, amount) => {
    let current = 0;
    balances.forEach((elem) => {
        if (balances.indexOf(elem) === clients.indexOf(client)) {
            current += balances.indexOf(elem);
        }
    })
    if (current > amount) {
        current -= amount;
    }
    return current;


}
console.log(withdraw(clients, balances, client, amount));