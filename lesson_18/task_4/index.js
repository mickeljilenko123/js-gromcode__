//input: func
//output: func

//saveCalls(func) => func

function saveCalls() {
    let calls = [];
    return function withMemory() {
        calls.push([...arguments]);
    }
}


function sum(a, b) {
    return a + b;
}

const withMemory = saveCalls(sum);
withMemory(3, 5)