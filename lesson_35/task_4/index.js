const jsonString = '{"name": "Tom"}';

export const parseUser = jsonString => {
    if (JSON.parse(jsonString).ok) {
        return jsonString;
    } else {
        return null;
    }
};