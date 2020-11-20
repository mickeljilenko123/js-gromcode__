const jsonString = '{"name": "Tom"}';

export const parseUser = jsonString => {
    if (JSON.parse(jsonString).ok) {
        return jsonString;
    }
    if (!JSON.parse(jsonString).ok) {
        return null;
    }
};