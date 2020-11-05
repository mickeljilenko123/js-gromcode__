// 1) К указаной дате добавить количество дней

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const setDays = new Date(date).setDate(day + days);
    return weekDays[new Date(setDays).getDay()];
}
const res = dayOfWeek(new Date(2019, 0, 1), 12);
console.log(res);
export { dayOfWeek }