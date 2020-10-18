const user = {
    firstName: 'Tom',
    lastName: 'Soer',
    getFullName() {
        return (`${this.firstName}, ${this.lastName}`)
    },
    setFullName(firstName, lastName) {
        return (`${this.firstName = firstName} ${this.lastName = lastName}`);
    }
};

const res = user.setFullName.bind(user, 'John', 'Doe');
res();

export { user }