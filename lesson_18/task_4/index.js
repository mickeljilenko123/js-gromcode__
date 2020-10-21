//input: func
//output: func

//saveCalls(func) => func

function saveCalls(func) {
    withMemory.calls = [];
    return function withMemory() {
        withMemory.calls.push([...arguments]);
        console.log(calls);
        return func.call(this);
    }
}

const sum = (a, b) => {
    return a + b;
}

const withMemory = saveCalls(sum);
withMemory(3, 6);

export { saveCalls }