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

const getPeople = (obj) => {
    let arr = [];
    Object.values(obj)
        .forEach(elem => {
            elem.forEach(e => {
                console.log(e);
                arr.push(e['name'])
            })
        });
    console.log(arr);
    return arr;
}
getPeople(obj2);