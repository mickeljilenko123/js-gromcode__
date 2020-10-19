const event = {
    guests: [
        { name: 'John', age: 17, email: 'example@server.com' },
        { name: 'Bob', age: 18, email: 'example@server.com' }
    ],
    message: 'Welcome to the party!',
    getInvitations() {
        return this.guests.filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email,
                text: `Dear ${name}! ${this.message}`,
            }));
    }
};
event.getInvitations();
export { event };