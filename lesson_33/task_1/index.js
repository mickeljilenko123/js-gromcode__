// How to work on tech tasks. Step by step guide
// 1. Learn requirements
// 2. Create step by step algo (& input/output for funtions)
// 3. Create prototype solution & testing - черновое решение
// 4. Final testing & refactoring -> final solution

//input:
//output:

"use strict";

const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

// const defaultAvatar = "https:avatars3.githubusercontent.com/u10001";

// userAvatarElem.src = defaultAvatar;

const fetchUserData = (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json());
};

const renderUserData = (userData) => {
    console.log(userData);
    const { avatar_url, name, location } = userData;
    console.log(avatar_url);
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocationElem.textContent = location ? `from ${location}` : "";
};

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = () => {
    const userName = userNameInputElem.value;
    console.log(userName);
    fetchUserData(userName)
        .then((userData) => renderUserData(userData));
};

showUserBtnElem.addEventListener("click", onSearchUser);