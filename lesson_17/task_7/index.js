const user = {

    getFullName() {
        return (`${this.firstName} ${this.lastName}`)
    },
    setFullName(f, l) {
        this.firstName = f;
        this.lastName = l;
    },

};

const res = user.setFullName.bind(user, 'John', 'Doe');
res();
console.log(user.getFullName());
export { user }