const wallet = {
    transactions: [2, 5, 6, 19],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },

};
wallet.getMin();
export { wallet }