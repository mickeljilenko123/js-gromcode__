'use strict';
let message = 'Just learn it!';

export function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(newText) {
    message = newText;
}

setMessage('Good job!');
sendMessage('Ann');