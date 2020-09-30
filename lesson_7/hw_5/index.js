'use strict';

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
const client = 'John';
const amount = 50;

const withdraw = (clients, balances, client, amount) => {
    let current = 0;
    balances.forEach((elem) => {
        if (balances.indexOf(elem) === clients.indexOf(client)) {
            current += elem;
        }
    });
    return (current > amount) ? current -= amount : -1;
}
console.log(withdraw(clients, balances, client, amount));