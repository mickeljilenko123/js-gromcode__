const arrContacts = [
    { name: 'Tom', phoneNumber: '777-77-77' },
    { name: 'Ann', phoneNumber: '777-77-77' },
    { name: 'Bob', phoneNumber: '777-77-77' },
    { name: 'Kriss', phoneNumber: '777-77-77' },
];


const sortContacts = (arr, isAsc) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const result = arrContacts.sort((a, b) => {
        return b.name.localeCompare(a.name)
    });
    return result;
}
console.log(sortContacts(arrContacts));