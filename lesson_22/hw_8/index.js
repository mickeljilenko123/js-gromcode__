const checkBoxElem = document.querySelector('.task-status');
checkBoxElem.addEventListener('click', event => {
    if (event.target.checked) {
        console.log(true);
    }
    if (!event.target.checked) {
        console.log(false);
    }
});