const clients = ['Ann', 'John', 'User'];
const client = 'John';
const balances = [1400, 87, -6];
const amount = 50;

const withdraw = (clients, client, balances, amount) => {
    for (let i = 0; i < balances.length; i++) {
        if (balances.indexOf(balances[i]) === clients.indexOf(client)) {
            if (balances[i] > amount) {
                balances[i] -= amount;
            } else if (balances[i] < amount) {
                return -1;
            }
        }
    }
    return balances;
}
console.log(withdraw(clients, client, balances, amount));