//input: func
//output: func

//saveCalls(func) => func

function saveCalls(func) {
    // let calls = [];
    withMemory.calls = [];
    return function withMemory() {
        withMemory.calls.push([...arguments]);
        return func.call(this);
    }
}

// const sum = (a, b) => {
//     return a + b;
// }

// const withMemory = saveCalls(sum);
// withMemory(3, 6);

export { saveCalls }