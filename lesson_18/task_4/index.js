//input: func
//output: func

//saveCalls(func) => func

function saveCalls(func) {
    let calls = [];
    return function withMemory() {
        this.calls.push([...arguments]);
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