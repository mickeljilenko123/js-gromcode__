const squaredNumbers = () => {
        const getElem = document.querySelector('.number');
        // const elemOne = getElem.dataset.number * getElem.dataset.number;
        // getElem.setAttribute('data-squared-number', elemOne);

        getElem.forEach(e => {
                e.dataset.squaredNumber = e.dataset.number * e.dataset.number;
            })
            // console.log(getElem);
    }
    // squaredNumbers();
export { squaredNumbers }