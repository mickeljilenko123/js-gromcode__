'use strict';
let message = 'Just learn it!';

function sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

function setMessage(newText) {
    message = newText;
}

setMessage('Good job!');
sendMessage('Ann');