// const clients = ['Ann', 'John', 'User'];
// const client = 'John';
// const balances = [1400, 87, -6];
// const amount = 50;

// const withdraw = (clients, client, balances, amount) => {
//     for (let i = 0; i < balances.length; i++) {
//         if (balances.indexOf(balances[i]) === clients.indexOf(client)) {
//             if (balances[i] > amount) {
//                 return balances[i] -= amount;
//             }
//             if (balances[i] < amount) {
//                 return -1;
//             }
//         }
//     }
// }
// console.log(withdraw(clients, client, balances, amount));

// else variant

const clients = ['Ann', 'John', 'User'];
const client = 'John';
const balances = [1400, 87, -6];
const amount = 50;


function withdraw(clients, balances, client, amount) {
    let current = 0;
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] === client) {
            current += balances[i];
            console.log(current);
        }
        if (current > amount) {
            console.log(current);
            return current -= amount;
        }
        if (current < amount) {
            return -1;
        }
    }
}
console.log(withdraw(clients, balances, client, amount));


const clients = ['Ann', 'John', 'User'];
const client = 'John';
const balances = [1400, 87, -6];
const amount = 50;

let current = 0;
for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client) {
        current += balances[i];
    }
}
if (current > amount) {
    current -= amount;
} else {
    return -1;
}
console.log(current);
return current;