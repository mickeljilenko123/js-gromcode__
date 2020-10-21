const user = {
    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    },
    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    }
};

const res = user.setFullName.bind(user, 'John', 'Doe');
res();
// console.log(user.getFullName());
export { user }