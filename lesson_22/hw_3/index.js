const checkBoxElem = document.querySelector('.task-status');
checkBoxElem.addEventListener('change', () => {
    if (checkBoxElem.value === 'checked') {
        console.log(true);
    }
    if (checkBoxElem.value !== 'checked') {
        console.log(false);
    }
});