const getElem = document.querySelector('.single-use-btn');
getElem.addEventListener('click', () => {
    console.log('clicked');
    getElem.removeEventListener('click', () => {
        console.log(false);
    })
});