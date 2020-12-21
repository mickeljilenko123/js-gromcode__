const tasks = [
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Pick up Tom from airport", done: true },
    { id: 3, text: "Visit party", done: false },
    { id: 4, text: "Visit doctor", done: true },
    { id: 5, text: "Buy meat", done: false },
];


const listElement = document.querySelector(".list");
const renderListItems = (tasks) => {
    //через map, на каждой итерации создаём "li", назначаем класс и добавляем id
    const elem = tasks
        .sort((a, b) => a.done - b.done)
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
    getCheckBox.done = event.target.checked;
    renderListItems(tasks)
}
listElement.addEventListener("click", onCheckBoxClick);