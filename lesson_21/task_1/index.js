const tasks = [
    { id: 1, text: "Buy milk", done: false },
    { id: 2, text: "Pick up Tom from airport", done: false },
    { id: 3, text: "Visit party", done: false },
    { id: 4, text: "Visit doctor", done: true },
    { id: 5, text: "Buy meat", done: true },
];

//1. Создаем функцию для отрисовки
//2. Функция принимает массив
//3. Находим файл в который будет отрисовываться наши ел.
//4. Созадем ел в который будет отрисовка каждого елем
const renderListItem = (listItems) => {
    const listElement = document.querySelector('.list');

    const arrList = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ id, text, done }) => {

            const listItemElem = document.createElement('li');

            const checkboxElement = document.createElement('input');

            checkboxElement.addEventListener('input', onCheckboxEvent)

            checkboxElement.classList.add('list__item-checkbox');

            checkboxElement.setAttribute('type', 'checkbox');
            checkboxElement.setAttribute("data-id", id);
            checkboxElement.checked = done;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }

            listItemElem.classList.add('list__item');
            listItemElem.append(checkboxElement, text);

            return listItemElem;
        })

    listElement.append(...arrList);
    renderListItems(tasks);
};
const onCheckBoxClick = event => {
    //Проверяет есть ли этот класс внутри
    const isCheckboxElement = event.target.classList.contains('list__item-checkbox')

    // Если не сидения то я просто выхожу
    if (!isCheckboxElement) {
        return;
    }
    const arr1 = tasks.find(e =>
        console.log(e.id) === Number(event.target.dataset.id));
    arr1.done = event.target.checked;
};

listElement.addEventListener("click", onCheckBoxClick);

console.log(renderListItem(tasks));