let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum += i;
}

let bool = (sum / 1234 > sum % 1234) || (sum / 1234 < sum % 1234);
console.log(bool);