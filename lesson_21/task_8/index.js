const createButton = buttonText => {
    const elem = document.createElement('button');
    elem.append('body');
    elem.textContent = buttonText;
}
createButton('Send Email');
export { createButton }