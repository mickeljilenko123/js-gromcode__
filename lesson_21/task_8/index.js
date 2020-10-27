const createButton = buttonText => {
    const elem = document.createElement('button');
    elem.textContent = buttonText;
    const elem1 = document.querySelector('body');
    elem1.append(elem);

}
createButton('Send Email');
export { createButton }