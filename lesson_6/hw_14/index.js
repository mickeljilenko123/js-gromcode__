//  input array
//  output num
// Проверяем каждый эл на количество повторений
// Если количество эл больше 1 повторения
//  тогда мы его прибавляем к переменной 
const num = [1, 4, 1, 8, 3, 4, 8, 8]
    // const [...num1] = num;
const uniqueCount = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    const newArr = [];
    for (let i = 0; i < num.length; i += 1) {
        if (!num[i] === newArr.includes(num[i])) {
            newArr.push(num[i]);
        }
    }
    return newArr.length;
}
console.log(uniqueCount(num));