const checkBoxElem = document.querySelector('.task-status');
checkBoxElem.addEventListener('change', () => {
    if (checkBoxElem.checked) {
        console.log(true);
    }
    if (!checkBoxElem.checked) {
        console.log(false);
    }
});