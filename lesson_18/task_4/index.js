// export function saveCalls() {
//     let calls = [];
//     return function() {
//         calls.push([...arguments]);
//     }
// }

// function test(a, b) {
//     return Math.sqrt(a * a + b * b);
// }
// const withMemory = saveCalls(test);
// withMemory(4, 2);
// withMemory(9, 1);

export function saveCalls() {
    let calls = [];
    return function() {
        calls.push([...arguments]);
    }
}

const user = {
    name: 'John',
    sayHi() {
        return this.name;
    }
};
const methodWithMemory = saveCalls(user.sayHi);
methodWithMemory.apply({ name: 'Tom' }); // 'Tom'