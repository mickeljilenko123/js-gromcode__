const squaredNumbers = () => {
    const getElem = document.querySelector('.number');
    const elemOne = getElem.dataset.number * getElem.dataset.number;
    getElem.setAttribute('data-squared-number', elemOne);
    console.log(getElem);
}
squaredNumbers();