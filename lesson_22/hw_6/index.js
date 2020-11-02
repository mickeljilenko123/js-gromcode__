const getElemBtn = document.querySelectorAll('.btn');


const handleClick = event => {
    console.log(event.target.textContent);
}
getElemBtn.forEach(e => {
    e.addEventListener('click', handleClick)
});