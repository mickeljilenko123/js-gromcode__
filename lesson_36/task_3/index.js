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
// export const getUserId = async(userId) => {
//     try {
//         const response = await fetch(`https://api.github.com/users/${userId}`)
//         if (!response.ok) {
//             return null;
//         }
//         const res = await response.json();
//         const e = await res.blog;
//         return e;
//     } catch (err) {
//         throw new Error('Failed to fetch user')
//     }
// }
// getUserId()
//     .catch(err => console.log(err.message))

// export const getUsersBlogs = arr => {
//     const res = arr.map(e => getUserId(e));
//     Promise.all(res)

//     console.log(res);
//     return res;
// }

// getUsersBlogs(['google', 'facebook', 'gaearon']);

export const getUsersBlogs = async(usersBlogs) => {
    try {
        const getUserId = await usersBlogs.map(
            (userId) =>
            fetch(`https://api.github.com/users/${userId}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch user");
            })
            .then((users) => users.blog)
        );

        const res = Promise.all(getUserId);
        return res;


    } catch (error) {
        throw new Error(error);
    }
};

getUsersBlogs(["google", "facebook", "gaearon"])
    .then(resList => console.log(resList))