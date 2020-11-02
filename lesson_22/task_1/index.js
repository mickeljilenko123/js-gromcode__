const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const getElem = (text, color) => {
    const elem1 = document.querySelector('.events-list');
    elem1.innerHTML += `<span style="color: ${color}; margin-left: 8px;" >${text}</span>`;
}
const elem2 = getElem.bind(null, 'DIV', 'green');
const elem3 = getElem.bind(null, 'P', 'green');
const elem4 = getElem.bind(null, 'SPAN', 'green');

const gElem2 = getElem.bind(null, 'DIV', 'gray');
const gElem3 = getElem.bind(null, 'P', 'gray');
const gElem4 = getElem.bind(null, 'SPAN', 'gray');

divElem.addEventListener('click', gElem2, true);
divElem.addEventListener('click', elem2);

pElem.addEventListener('click', gElem3, true);
pElem.addEventListener('click', elem3);

spanElem.addEventListener('click', gElem4, true);
spanElem.addEventListener('click', elem4);

const clearElem = document.querySelector('.clear-btn');
clearElem.addEventListener('click', () => {
    const clearElem1 = document.querySelector('.events-list');
    clearElem1.innerHTML = '';
});