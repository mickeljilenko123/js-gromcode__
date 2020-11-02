const getElemBtn = document.querySelector('.btn');
const handleClick = (event) => {
    console.log(event.target.textContent);
}
getElemBtn.addEventListener('click', handleClick)