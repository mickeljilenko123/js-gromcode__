const getTitle = () => {
    return document.querySelector('.title').textContent;
}
getTitle();

const getDescription = () => {
    return document.querySelector('.about').innerText;
}
getDescription();

const getPlans = () => {
    return document.querySelector('.plans').innerHTML;
}
getPlans();

const getGoal = () => {
    return document.querySelector('.goal').outerHTML;
}
getGoal();

export { getTitle, getDescription, getPlans, getGoal }