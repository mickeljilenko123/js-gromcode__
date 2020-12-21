const tasks = [
    { id: 1, text: "Buy milk", done: false, dateBegin: new Date(), dateFinal: null },
    { id: 2, text: "Pick up Tom from airport", done: true, dateBegin: new Date(), dateFinal: null },
    { id: 3, text: "Visit party", done: false, dateBegin: new Date(), dateFinal: null },
    { id: 4, text: "Visit doctor", done: true, dateBegin: new Date(), dateFinal: null },
    { id: 5, text: "Buy meat", done: false, dateBegin: new Date(), dateFinal: null },
];


const listElement = document.querySelector(".list");
const renderListItems = (tasks) => {
    //через map, на каждой итерации создаём "li", назначаем класс и добавляем id
    const elem = tasks
        // .sort((a, b) => a.done - b.done)
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            }
            if (a.done) {
                return new Date(b.dateFinal) - new Date(a.dateFinal);
            }
            return new Date(b.dateBegin) - new Date(a.dateBegin);
        })
        .map(({ id, text, done }) => {
            const listItem = document.createElement("li");
            listItem.classList.add("list__item");

            const checkboxElem = document.createElement("input");
            checkboxElem.classList.add("list__item-checkbox");
            checkboxElem.setAttribute("type", "checkbox");
            checkboxElem.setAttribute("data-id", id)

            checkboxElem.checked = done;

            if (done) {
                listItem.classList.add("list__item_done");
            };

            listItem.append(checkboxElem, text);
            return listItem;
        });
    listElement.innerHTML = "";
    listElement.append(...elem);
};
renderListItems(tasks);


const onCheckBoxClick = (event) => {
    const getCheckBox = tasks.find(e =>
            e.id === Number(event.target.dataset.id))
        //если задача невыполнена - обновляем дату
    if (getCheckBox.done === false) {
        getCheckBox.done = true;
        //проверить в дебаге
        getCheckBox.dateFinal = new Date();
    } else {
        getCheckBox.done = false;
        getCheckBox.dateFinal = null;
    }
    //getCheckBox.done = event.target.checked;
    renderListItems(tasks)
}
listElement.addEventListener("click", onCheckBoxClick);

const inputElem = document.querySelector('.task-input');
const createButton = document.querySelector('.create-task-btn');
debugger;
const onInputCreate = () => {
    if (inputElem.value === "") {
        return;
    }
    tasks.push({
        id: Number(`${tasks.length + 1}`),
        text: inputElem.value,
        done: false,
        dateBegin: new Date(),
        dateFinal: null,
    });
    inputElem.value = "";
    renderListItems(tasks);

}
createButton.addEventListener('click', onInputCreate);