const obj2 = {
    room1: [
        { 'name': 'John Doe' },
    ],
    room2: [
        { 'name': 'Tom' },
    ],
    room3: [
        { 'name': 'Bob' },
    ],
};

const getPeople = (obj) =>
    Object.values(obj).flat().map(e => e['name']);
console.log(getPeople(obj2));