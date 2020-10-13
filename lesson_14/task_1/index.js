let message = 'Just learn it!';
export const sendMessage = name => {
    const sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

export function setMessage(newText) {
    message = newText;
}

sendMessage('Ann');
setMessage('Good job!');
sendMessage('Ann');