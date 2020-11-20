import { fetchUserData, fetchRepositories } from './gateWay.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';


const defaultUser = {
    avatar_url: 'https:avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};
renderUserData(defaultUser);


const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");


const onSearchUser = () => {
    cleanReposList();
    showSpinner();
    const userName = userNameInputElem.value;
    console.log(userName);
    //Запрашиваем данные в пользователя
    fetchUserData(userName)
        .then((userData) => {
            // Полученные данные отрисовали
            renderUserData(userData)
                // Передаем управелние дальше
            return userData.repos_url
        })
        // Делаем запрос за списком
        .then(url => fetchRepositories(url))
        // И после этого его отрисовываем
        .then(reposList => {
            renderRepos(reposList);
        })
        .catch(err => {
            alert(err.message)
        })
        .finally(() => {
            hideSpinner();
        });

};

showUserBtnElem.addEventListener("click", onSearchUser);