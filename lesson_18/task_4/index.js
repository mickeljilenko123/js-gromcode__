export function saveCalls() {
    let calls = [];
    return function() {
        calls.push([...arguments]);
    }
}

function test(a, b) {
    return Math.sqrt(a * a + b * b);
}
const withMemory = saveCalls(test);
withMemory(4, 2);
withMemory(9, 1);