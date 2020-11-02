const elem = document.querySelector('.text-input');


elem.addEventListener('change', (event) => {
    console.log(event.target.value);
});