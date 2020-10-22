export function User(name, age) {
    this.name = name;
    this.age = age;
    User.prototype.sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    };
    User.prototype.requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`);
    };
    User.prototype.setAge = function() {
        console.log(`New photo request was sent for ${this.name}`);
        if (this.age >= 25) {
            return age;
        };
        if (this.age < 0) {
            return false;
        };
    };
};
const user1 = new User('John', 29);
user1.sayHi();