const getElem = document.querySelector('.single-use-btn');

const getElem1 = () => {
    console.log('clicked');
    getElem.removeEventListener('click', getElem1, false)
}

getElem.addEventListener('click', (getElem1));