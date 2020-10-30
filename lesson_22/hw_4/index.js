const buttonElem = document.querySelector('.search__btn');
buttonElem.addEventListener('click', () => {
    const elem = document.querySelector('.search__input');
    console.log(elem.value);
});