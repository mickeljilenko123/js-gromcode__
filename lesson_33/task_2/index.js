const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(res => console.log(res))
};


const getTaskById = taskId => {

    return fetch(`${baseUrl}/${taskId}`)
        .then((response) => response.json())
        .then(res => console.log(res))

};
// getTasksList();
// getTaskById(2);
export { getTasksList, getTaskById }