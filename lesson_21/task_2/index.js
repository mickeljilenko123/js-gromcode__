const getTitleElement = () => {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return;
}
getTitleElement();
const getInputElement = () => {
    const inputElem = document.querySelector('text');
    console.dir(inputElem);
    return;
}
getInputElement();
export { getTitleElement, getInputElement }