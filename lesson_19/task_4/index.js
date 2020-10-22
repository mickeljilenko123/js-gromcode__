const obj = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return (`${this.firstName} ${this.lastName}`)
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
obj.fullName = 'Tom Hardy';
console.log(obj.firstName);
export default { obj }