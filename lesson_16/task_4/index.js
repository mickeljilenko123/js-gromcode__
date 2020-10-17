var foo = 1;

function bar() {
    foo = 1;
    if (!foo) {
        var foo = 10;
    }
    return foo;
}
var foo = bar();
console.log(foo);
export default { foo }