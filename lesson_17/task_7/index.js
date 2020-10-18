const user = {
    firstName: '',
    lastName: '',
    getFullName() {
        return (`${this.firstName}, ${this.lastName}`)
    },
    setFullName(n, f) {
        this.firstName = n,
            this.lastName = f;
    }
};

const res = user.setFullName.bind('John', 'Doe');
res();

export { user }