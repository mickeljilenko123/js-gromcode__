//  input array
//  output num
// Проверяем каждый эл на количество повторений
// Если количество эл больше 1 повторения
//  тогда мы его прибавляем к переменной 
const num = [2, 2, 3, 3, 4, 4, 5]
    // const [...num1] = num;
const uniqueCount = (arr) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArray = [];
    for (let i = 0; i < num.length; i++) {
        if (!num[i] === newArray.includes(num[i])) {
            newArray.push(num[i]);
        }
    }
    console.log(newArray.length);
    return newArray;
}
uniqueCount(num);