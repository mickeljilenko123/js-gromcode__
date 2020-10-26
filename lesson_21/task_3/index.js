const getItemsList = () => {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
}
getItemsList();

const getItemsArray = () => {
    const elementsArray = document.querySelectorAll('.tool');
    console.dir(Array.from((elementsArray)));
    return Array.from(elementsArray);
}
getItemsArray();

export { getItemsList, getItemsArray }