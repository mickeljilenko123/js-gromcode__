'use strict';

function printMessage(age, city) {
    console.log(this);
    console.log(`Hello ${this.name}, email ${this.email}, age ${28}, city ${'Varva'}`);
}

let user = {
    name: 'Alex',
    email: 'gmail.com',
}

//1
//input: obj, arg1 ...argN
//output: func
const printMessageBlinded = printMessage.bind(user);
printMessageBlinded(100, 'Lviv');

const printMessageBlinded1 = printMessage.bind(user, 180, 'Lviv');
printMessageBlinded1();

//the same ^^^
printMessage.bind(user, 180, 'Lviv')();

//input: func, obj, arg1 ... argN
//output: func
const myBind = (func, context, ...args) => {


        //TODO


    }
    // myBind(printMessage, user, 200, 'Kiev')();