const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
const client = 'John';
const amount = 50;

const withdraw = (clients1, balances1, client1, amount1) => {
    let current = 0;
    balances1.forEach((elem) => {
        if (balances1.indexOf(elem) === clients1.indexOf(client1)) {
            current += elem;
        }
    });
    // eslint-disable-next-line no-return-assign
    return current > amount1 ? current -= amount1 : -1;
}
console.log(withdraw(clients, balances, client, amount));