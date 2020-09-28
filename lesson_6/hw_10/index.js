const clients = ['Ann', 'John', 'User'];
const client = 'John';
const balances = [1400, 87, -6];
const amount = 50;

const withdraw = (clients, client, balances, amount) => {
    for (let i = 0; i < balances.length; i++) {
        if (balances.indexOf(balances[i]) === clients.indexOf(client)) {
            if (balances[i] > amount) {
                return balances[i] -= amount;
            } else if (balances[i] < amount) {
                return -1;
            }
        }
    }
}
console.log(withdraw(clients, client, balances, amount));

// else variant

// const clients = ['Ann', 'John', 'User'];
// const client = 'John';
// const balances = [1400, 94, -6];
// const amount = 50;

// function withdraw(clients, balances, client, amount) {
//     for (let i = 0; i < clients.length; i++) {
//         if (clients[i] == client) {
//             if (balances[i] > amount) {
//                 return balances[i] -= amount;
//             }
//             if (balances[i] < amount) {
//                 return -1;
//             }
//         }
//     }
// }
// console.log(withdraw(clients, balances, client, amount));