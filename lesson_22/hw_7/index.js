const elem = document.querySelector('.text-input');


// elem.addEventListener('change', (event) => {
//     console.log(event.target.value);
// });

const e = event => {
    console.log(event.target.value);
}
elem.addEventListener('change', e);