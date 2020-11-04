// 1) Получаем ссылки на них
/* 2) Проверяем что ввел пользователь. 
Если не верно выводим сообщение об ошибке
*/
// 3) Подписываемся на каждый ел и проверяем что ввел польз
// 4) Получаем значение этого поля
// 5) Анализируем (Делаем проверку) 

const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value ?
    undefined :
    'Required';

const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';

const onInputEmail = event => {
    const errorText = [isRequired, isEmail]
        .map(e => e(event.target.value))
        .filter(e => e)
        .join(', ');
    emailErrorElem.textContent = errorText;
}
emailInputElem.addEventListener('input', onInputEmail);

const onInputPassword = event => {
    const errorText = [isRequired]
        .map(e => e(event.target.value))
        .filter(e => e)
        .join(', ');
    passwordErrorElem.textContent = errorText;
}
passwordInputElem.addEventListener('input', onInputPassword);

const formData = document.querySelector('.login-form');

const onFormClick = event => {
    event.preventDefault();

    const getFormData = [...new FormData(formData)]
        .reduce((acc, [name, value]) => ({...acc, [name]: value }), {});
    alert(JSON.stringify(getFormData));
};
formData.addEventListener('submit', onFormClick);




// const isRequired = value => value ?
//     undefined :
//     'Required';

// const isEmail = value => value.includes('@') ?
//     undefined :
//     'Should be an email';

// const validatorsByField = {
//     email: [isRequired, isEmail],
//     password: [isRequired],
// };

// const validate = (fieldName, value) => {
//     const validators = validatorsByField[fieldName];
//     return validators
//         .map(validator => validator(value))
//         .filter(errorText => errorText)
//         .join(', ');
// };

// const onEmailChange = event => {
//     const errorText = validate('email', event.target.value);
//     emailErrorElem.textContent = errorText;
// };

// const onPasswordChange = event => {
//     const errorText = validate('password', event.target.value);
//     passwordErrorElem.textContent = errorText;
// };

// emailInputElem.addEventListener('input', onEmailChange);
// passwordInputElem.addEventListener('input', onPasswordChange);

// const formElem = document.querySelector('.login-form');

// const onFormSubmit = event => {
//     event.preventDefault();
//     const formData = [...new FormData(formElem)]
//         .reduce((acc, [field, value]) => ({
//             ...acc,
//             [field]: value
//         }), {});
//     alert(JSON.stringify(formData));
// };

// formElem.addEventListener('submit', onFormSubmit);