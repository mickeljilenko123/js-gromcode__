// Algo
//1. Cщитать данные с формы
//2. Записываем данные формы на сервер Метод Post
//3. Ответ выводим в алерт
//4. После сохранения очищаем поле воода
//5. Если произошла ошибка при создании юзера

"use strict";

const serverUrl = "https://5fb53916e473ab0016a17b65.mockapi.io/api/v1/users";

const loginForm = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");
const errorField = document.querySelector(".error-text");


const formChanges = () => {
    if (loginForm.reportValidity()) {
        submitButton.disabled = false;
    }
};
loginForm.addEventListener("input", formChanges);

const getUserInfo = e => {
    e.preventDefault();
    //Данные формы конвертируем в обьект
    const myFormDataOnPage = [...new FormData(loginForm)]
        .reduce((acc, arr) => ({...acc, [arr[0]]: arr[1] }), {});

    fetch(serverUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charser= utf-8",
            },
            body: JSON.stringify(myFormDataOnPage),
        })
        .then(response => response.json())
        .then(data => {
            //Очищаем поле ввода
            loginForm.reset();
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorField.textContent = "Failed to create user";
        });
}
loginForm.addEventListener("submit", getUserInfo);