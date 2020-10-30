const buttonElem = document.querySelector('.search__btn');
buttonElem.addEventListener('change', () => {
    const elem = document.querySelector('.search__input');
    console.log(elem.textContent);
});