const finishForm = () => {

    const getElem = document.querySelector('input');
    getElem.setAttribute('type', 'password');

    const getFinishForm = document.querySelector('.login-form');
    const elem = document.createElement('input');
    elem.setAttribute('type', 'text');
    elem.setAttribute('name', 'login');

    getFinishForm.prepend(elem);
    console.log(getFinishForm);
}
finishForm();