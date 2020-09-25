/* Этот код менять не нужно */
const defaultUserName = 'anonymus';
const userName = 'John';
const anotherUser = null;
const isAdmin = false;
const message = 'text';
const anotherMessage = 'text as well';
const isLoggedIn = Boolean(userName);

/* В коде ниже нужно использовать правильные операторы после знака присваивания */
const activeUser = defaultUserName;
console.log(activeUser);
const hasAccess = isLoggedIn;
console.log(hasAccess);
const isTruthy = isLoggedIn;
console.log(isTruthy);
const isFalsy = isAdmin;
console.log(isFalsy);
const isAdmin = false;
const isNotTrue = isAdmin;
console.log(isNotTrue);

const userName = 'John';
const isLoggedIn = Boolean(userName);
const isTrue = isLoggedIn;
console.log(isTrue);