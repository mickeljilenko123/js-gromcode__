 export const user = {
     firstName: 'John',
     lastName: 'Doe',
     getFullName() {
         console.log(`${this.firstName} ${this.lastName}`);
     }
 };

 const res = user.getFullName().bind(user);
 res();