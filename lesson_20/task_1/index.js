class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    };
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    };
    setAge(age) {
        this.age = age;
        if (age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
            return age;
        }
        if (age < 0) {
            return false;
        }
        return age;
    };
}
const user1 = new User('John', 29);
user1.sayHi();
export { User }


// export function User(name, age) {
//     this.name = name;
//     this.age = age;
//     User.prototype.sayHi = function() {
//         console.log(`Hi, I am ${this.name}`);
//     };
//     User.prototype.requestNewPhoto = function() {
//         console.log(`New photo request was sent for ${this.name}`);
//     };
//     User.prototype.setAge = function(age) {
//         this.age = age;
//         if (age >= 25) {
//             console.log(`New photo request was sent for ${this.name}`);
//             return age;
//         }
//         if (age < 0) {
//             return false;
//         }
//         return age;
//     };
// };
// const user1 = new User('John', 29);
// user1.sayHi();