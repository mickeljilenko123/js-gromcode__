const setTitle = text => {
    const red = document.querySelector('.title');
    return red.textContent = text;
}
setTitle('I am Front-End developer');

export { setTitle }