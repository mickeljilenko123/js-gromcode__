let num1 = 0;

export function add(num) {
    num1 += num;
    console.log(num1);
    return

}

export function decrease(num2) {
    num1 -= num2;
    console.log(num1);
    return
}

export function reset() {
    num1 = 0;
    console.log(num1);
    return;
}

export function getMemo() {
    num1;
    console.log(num1);
    return
}

add(4);
decrease(2);
reset();
getMemo();