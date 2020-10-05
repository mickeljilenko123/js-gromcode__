const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
];
const getTotalRevenue = (obj, key) =>
    obj.reduce((acc, e) => {
        return acc + e[key]
    }, 0)

console.log(getTotalRevenue(dayTransactions, 'amount'));