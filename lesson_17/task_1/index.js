 const user = {
     getFullName() {
         return (`${this.firstName} ${this.lastName}`);
     }
 };

 const res = user.getFullName;
 res.call({
     firstName: 'John',
     lastName: 'Doe',
 });
 export { user }