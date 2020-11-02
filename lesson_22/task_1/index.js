// const divElem = document.querySelector('.rect_div');
// const pElem = document.querySelector('.rect_p');
// const spanElem = document.querySelector('.rect_span');

// const getElem = (text, color) => {
//     const elem1 = document.querySelector('.events-list');
//     elem1.innerHTML += `<span style="color: ${color}; margin-left: 8px;" >${text}</span>`;
// }
// const elem2 = getElem.bind(null, 'DIV', 'green');
// const elem3 = getElem.bind(null, 'P', 'green');
// const elem4 = getElem.bind(null, 'SPAN', 'green');

// const gElem2 = getElem.bind(null, 'DIV', 'gray');
// const gElem3 = getElem.bind(null, 'P', 'gray');
// const gElem4 = getElem.bind(null, 'SPAN', 'gray');

// divElem.addEventListener('click', gElem2, true);
// divElem.addEventListener('click', elem2);

// pElem.addEventListener('click', gElem3, true);
// pElem.addEventListener('click', elem3);

// spanElem.addEventListener('click', gElem4, true);
// spanElem.addEventListener('click', elem4);

// const clearElem = document.querySelector('.clear-btn');
// clearElem.addEventListener('click', () => {
//     const clearElem1 = document.querySelector('.events-list');
//     clearElem1.innerHTML = '';
// });

// const attachBtn = document.querySelector('.attach-handlers-btn');
// const removeBtn = document.querySelector('.remove-handlers-btn');

// function attacher() {
//     divElem.addEventListener('click', gElem2, true);
//     divElem.addEventListener('click', elem2);

//     pElem.addEventListener('click', gElem3, true);
//     pElem.addEventListener('click', elem3);

//     spanElem.addEventListener('click', gElem4, true);
//     spanElem.addEventListener('click', elem4);
// };

// const remover = () => {
//     divElem.removeEventListener('click', gElem2, true);
//     divElem.removeEventListener('click', elem2);

//     pElem.removeEventListener('click', gElem3, true);
//     pElem.removeEventListener('click', elem3);

//     spanElem.removeEventListener('click', gElem4, true);
//     spanElem.removeEventListener('click', elem4);
// };
// attachBtn.addEventListener('click', () => attacher());
// removeBtn.addEventListener('click', () => remover());

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');


const logTarget = (text, color) => {
    // const eventsListElem = document.querySelector('.event-list');

    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


function attacher() {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
};

const remover = () => {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
};

const clearArea = () => {
    eventsListElem.innerHTML = '';
};

clearBtn.addEventListener('click', clearArea);

attachBtn.addEventListener('click', attacher);

removeBtn.addEventListener('click', remover);

attacher();
remover();