const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const errorTextEmail = document.querySelector('.error-text_email');
const passwordTextEmail = document.querySelector('.error-text_password');

//Проверка на пустое поле
const isRequared = value => value ?
    undefined :
    'Requared';

const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';

const validators = {
    email: [isRequared, isEmail],
    password: [isRequared],
}
const validate = (fieldName, value) => {
    const validatorsCurrent = validators[fieldName];
    return validatorsCurrent
        .map(validator => validator(value))
        .filter(errorText => errorText)
        .join(', ');
};
const onEmailChange = event => {
    const error = validate('email', event.target.value)
    errorTextEmail.textContent = error
};

const onPasswordChange = event => {
    const error = validate('password', event.target.value)
    passwordTextEmail.textContent = error
};
emailInputElem.addEventListener('change', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData()]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
    alert(JSON.stringify(formData));
}
formElem.addEventListener('submit', onFormSubmit)