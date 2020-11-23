//Algo

//1. Создаем функцию для запроса данных пользователя
// и получения имейла

//2. Создаем 2 функцию для перебора всех пользователей в массиве 
// и получения их имейлов используя функцию выше

//3. Проверяем наш массив промисов на ошибки






// const getUserId = async(userId) => {
//     return await fetch(`https://api.github.com/users/${userId}`)
//         .then(response => response.json())
//         .then(res => res.blog)
//         .then(e => e)
// }
const getUserId = async(userId) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
        const res = await response.json();
        const e = await res.blog;
        return e;
    } catch (err) {
        throw new Error("Failed to fetch user")
    }

}


const getUsersBlogs = arr => {
    const res = [];
    arr.forEach(e => {
        return res.push(getUserId(e));
    });
    console.log(res);
    return res;
}

getUsersBlogs(['google', 'facebook', 'gaearon']);


// Promise.all(['google', 'facebook', 'gaearon']).then(values => {
//     console.log(values);
// });