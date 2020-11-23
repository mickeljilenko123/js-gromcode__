export const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error("Failed to fetch user");
    }

}
fetchUser('f446vb')
    .then(userData => console.log(userData))
    .catch(err => console.log(err.message));