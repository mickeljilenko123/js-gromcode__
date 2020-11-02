const pagElems = document.querySelectorAll('.pagination__page');

const handleClick = event => {
    console.log(event.target.dataset.pageNumber);
}
pagElems.forEach(e => {
    e.addEventListener('click', handleClick);
});