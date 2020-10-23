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

class UserRepository {
    constructor(users) {
        this.Object.freeze(users) = users;
    }
    get fullUsers() {
        return (`${this.Object.freeze(users)}`)
    }
    getUserNames(users) {
        return this.Object.freeze(users);
    }
    getUserIds() {
        return this.Object.freeze(users['id']);
    }

}
export { User, UserRepository }