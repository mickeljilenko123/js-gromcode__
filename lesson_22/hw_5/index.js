const getElem = document.querySelector('.single-use-btn');
getElem.addEventListener('click', () => {
    console.log('clicked');
    getElem.stopPropagetion();
})