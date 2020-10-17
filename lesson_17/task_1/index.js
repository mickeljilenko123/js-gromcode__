 const user = {
     getFullName() {
         console.log(`${this.firstName} ${this.lastName}`);
     }
 };

 const res = user.getFullName;
 res.call({
     firstName: 'John',
     lastName: 'Doe',
 });
 export { user }