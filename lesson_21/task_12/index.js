const squaredNumbers = () => {
    const getElem = document.querySelectorAll('.number');
    getElem.forEach(e => {
        e.dataset.squaredNumber = e.dataset.number * e.dataset.number;
        return;
    })
}
squaredNumbers();
// export { squaredNumbers }