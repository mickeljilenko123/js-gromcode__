const user = {

    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    },
    setFullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    },

};

const res = user.setFullName.bind(user, 'John', 'Doe');
res();
// console.log(user.getFullName());
export { user }