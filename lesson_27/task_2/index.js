const counterElem = document.querySelector('.counter');
const spanElem = document.querySelector('.counter__value');

const onClickElem = e => {
    //Проверяем был ли клик на кнопке
    const isButton = e.target.classList.contains('counter__button');
    if (!isButton) {
        return;
    }
    const action = e.target.dataset.action;
    const oldValue = Number(spanElem.textContent);

    const newValue = action === 'decrease' ?
        oldValue - 1 : oldValue + 1;

    localStorage.setItem('counterValue', newValue);

    spanElem.textContent = newValue;
}
counterElem.addEventListener('click', onClickElem);

const onStorageChange = e => {
    spanElem.textContent = e.newValue;
}

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
    spanElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded)