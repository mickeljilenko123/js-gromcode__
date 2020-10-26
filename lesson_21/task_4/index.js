const getTitle = () => {
    const title = document.querySelector('.title');
    return title.textContent;
}
getTitle();

const getDescription = () => {
    const about = document.querySelector('.about');
    return about.innerText;
}
getDescription();

const getGoal = () => {
    const goal = document.querySelector('.goal');
    return goal.outerHTML;
}
getGoal();

export { getTitle, getDescription, getGoal }