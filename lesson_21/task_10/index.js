const finishForm = () => {

        const getElem = document.querySelector('input');
        getElem.setAttribute('type', 'text');
        getElem.setAttribute('name', 'login');

        const getFinishForm = document.querySelector('.login-form');
        const elem = document.createElement('input');
        elem.setAttribute('type', 'password');
        elem.setAttribute('name', 'password');

        getFinishForm.append(elem);
        // console.log(getFinishForm);
    }
    // finishForm();
export { finishForm }