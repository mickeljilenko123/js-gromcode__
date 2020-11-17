import { tasks } from './tasks.js';
import { renderListItems } from './render.js';
const listElement = document.querySelector(".list");
export const elementStatus = (event) => {
    const checkboxChecked = event.target.classList.contains(
        "list__item-checkbox"
    );
    if (!checkboxChecked) {
        return;
    }
    //сравниваем по айди
    const taskChecked = tasks.find((el) => el.id === event.target.dataset.id);
    //если задача невыполнена - обновляем дату
    if (taskChecked.done === false) {
        taskChecked.done = true;
        //проверить в дебаге
        taskChecked.dateFin = new Date();
    } else {
        taskChecked.done = false;
        taskChecked.dateFin = null;
    }
    // taskChecked.done = event.target.checked;
    renderListItems(tasks);
};
listElement.addEventListener("click", elementStatus);