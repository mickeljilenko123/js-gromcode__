const listElement = document.querySelector(".list");

export const renderListItems = (listItems) => {
    //через map, на каждой итерации создаём "li", назначаем класс и добавляем id
    const listItemsElems = listItems
        //сортировка по дате добавления
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            }
            if (a.done) {
                return new Date(b.dateFin) - new Date(a.dateFin);
            }
            return new Date(b.dateBegin) - new Date(a.dateBegin);
        })
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