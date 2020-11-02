const pagElems = document.querySelectorAll('.pagination__page');

const handleClick = event => {
    console.log(event.target.dataset);
}
pagElems.forEach(e => {
    e.addEventListener('click', handleClick);
});