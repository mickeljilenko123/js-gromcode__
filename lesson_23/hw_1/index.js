const tasks = [
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Pick up Tom from airport', done: false },
    { id: 3, text: 'Visit party', done: false },
    { id: 4, text: 'Visit doctor', done: true },
    { id: 5, text: 'Buy meat', done: true },
];

//выбор листа в котором создаём элементы "li"
const listElement = document.querySelector(".list");

const renderListItems = listItems => {
    //через map, на каждой итерации создаём "li", назначаем класс и добавляем id
    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ id, text, done }) => {
            const listItemElem = document.createElement("li");
            listItemElem.classList.add("list__item");
            //если дело сделано, добавляем класс на элемент
            if (done) {
                listItemElem.classList.add("list__item_done");
            }

            //добавляем каждому элементу checkbox
            const checkbox = document.createElement("input");
            //в checkbox назначаем класс
            checkbox.classList.add("list__item-checkbox");

            //каждому checkbox-элементу нужно задать тип атрибута "checkbox"
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("data-id", id);
            //checkbox-элемент должен считывать из tasks свойство done и установить значение черз свойство элемента "checked"
            checkbox.checked = done;

            //в каждый сформированный элемент списка добавляем checkbox и текст
            listItemElem.append(checkbox, text);
            return listItemElem;
        });
    //перед добавлением задачи обновляем весь список
    listElement.innerHTML = "";
    //массив созданных элементов вставляем в ".list"
    listElement.append(...listItemsElems);
};
renderListItems(tasks);

//при клике на checkbox изменить состояние элемента
const elementStatus = event => {
    const checkboxChecked = event.target.classList.contains(
        "list__item-checkbox"
    );
    if (!checkboxChecked) {
        return;
    }
    const taskChecked = tasks
        //следить за типом данных при сравнении
        .find((el) =>
            el.id === Number(event.target.dataset.id)
        );
    taskChecked.done = event.target.checked;
    renderListItems(tasks);
};
listElement.addEventListener("click", elementStatus);

const inputEl = document.querySelector(".task-input");
const createButton = document.querySelector(".create-task-btn");
//добавляем новое задание после ввода в поле и нажатия на кнопку Create
const addTask = () => {
    //если поле пустое - не добавляем задачу
    if (inputEl.value === "") {
        return;
    }
    tasks.push({
        //добавляем в элемент новый id относительно длины списка
        id: Number(`${tasks.length + 1}`),
        text: inputEl.value,
        done: false,
    });
    //в консоли поставить дебаггер и проверить добавление нового элемента в массив tasks
    inputEl.value = "";
    renderListItems(tasks);
};

createButton.addEventListener("click", addTask);