const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    },
    setFullName(getFullName) {
        let fn = getFullName.split(" ");
        this.firstName = fn[0];
        this.lastName = fn[1];
    },

};

// console.log(user.getFullName());
export { user }