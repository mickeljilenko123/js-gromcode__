import { tasks } from './tasks.js';
import { renderListItems } from './render.js';
const inputEl = document.querySelector(".task-input");
const createButton = document.querySelector(".create-task-btn");

export const addTask = () => {
    //если поле пустое - не добавляем задачу
    if (inputEl.value === "") return;
    tasks.push({
        //добавляем в элемент новые даты
        id: `${tasks.length + 1}`,
        text: inputEl.value,
        done: false,
        dateBegin: new Date(),
        dateFin: null,
    });

    inputEl.value = "";
    renderListItems(tasks);
};

createButton.addEventListener("click", addTask);