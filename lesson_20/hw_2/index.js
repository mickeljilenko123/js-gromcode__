class User {
    constructor(id, name, sessionId) {
        this.id = id;
        this.name = name;
        this.sessionId = sessionId;
    }
    get fullInfo() {
        return (`${this.id} ${this.name} ${this.sessionId}`);
    }
}

// const user = new User('1', 'Tom', 'session-id');
// console.log(user.id); // '1'
// console.log(user.name); // 'Tom'
// console.log(user.sessionId); // 'session-id'

// user.name = 'Bob'; 
// console.log(user.name); 

class UserRepository {
    constructor(users) {
        // super(id, name, sessionId, users)
        this._users = Object.freeze(users);
    }

    get users() {
        return this._users;
    }

    getUserNames() {
        return this._users.map(pers => pers._name);
    }

    getUserIds() {
        return this._users.map(pers => pers._id);
    }

    getUserNameById(id) {
        for (let pers of this._users) {
            console.log(this._users)
            if (pers.id === id) {
                console.log(pers)
                return pers.name;
            }
        }
    }
};

const usersArr = new User(`${Math.random()}`, 'Leon', '12345');

console.log(usersArr);

const getUsersData = new UserRepository(['Lynn', 'Freddy', 'Mark', 'Spiderman']);

console.log(getUsersData);
console.log(getUsersData.getUserNames());
console.log(getUsersData.getUserIds());
console.log(getUsersData.getUserNameById());

export { User, UserRepository };