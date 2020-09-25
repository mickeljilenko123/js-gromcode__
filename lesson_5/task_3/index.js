function getEventOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
const res = getEventOdd(17);
console.log(res);