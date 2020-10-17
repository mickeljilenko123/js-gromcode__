export function defer(func, ms) {
    return function() {
        setTimeout(() => func.call(this, ...arguments), ms);
    }
};
const obj = {
    sum() {
        console.log(`${this.a} + ${this.b}`);
    }
};
const defered = defer(obj.sum, 1000);
defered.call({ a: 5, b: 5 });