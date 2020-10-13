let message = 'Just learn it!';
const sendMessage = name => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

function setMessage(newText) {
    message = newText;
}

sendMessage('Ann');
setMessage('Good job!');
sendMessage('Ann');