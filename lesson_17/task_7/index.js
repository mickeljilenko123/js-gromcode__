const user = {
    firstName: 'Tom',
    lastName: 'Soer',
    getFullName() {
        return (`${this.firstName}, ${this.lastName}`)
    },
    setFullName(n, f) {
        return (`${this.firstName = n}, ${this.lastName = f}`);
    }
};

const res = user.setFullName.bind('John', 'Doe');
res();
export { user }