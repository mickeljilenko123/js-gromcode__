const createMessenger = () => {
    let message = 'Just learn it!';

    function sendMessage(name) {
        const sender = 'Gromcode';
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(newText) {
        message = newText;
    }
    return {
        sendMessage,
        setMessage,
    };
};
const messager = createMessenger();
messager.sendMessage('Bob');
const messager1 = createMessenger();
messager1.setMessage('Good job!');
messager1.sendMessage('Bob');