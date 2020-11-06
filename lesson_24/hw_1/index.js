const getDiff = (startDate, endDate) => {
    let getNewDate = new Date(startDate - endDate);

    if (startDate < endDate)
        getNewDate = new Date(endDate) - new Date(startDate);

    const newDay = parseInt(getNewDate / (1000 * 60 * 60 * 24));
    const newHour = parseInt((getNewDate / (1000 * 60 * 60)) % 24);
    const newMin = parseInt((getNewDate / (1000 * 60)) % 60);
    const newSec = parseInt((getNewDate / 1000) % 60);

    // let newDay = getNewDate.getDate();
    // let newHour = getNewDate.getHours();
    // let newMin = getNewDate.getMinutes();
    // let newSec = getNewDate.getSeconds();
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
}

const res = getDiff(new Date(2019, 6, 30, 15), 2022, 5, 10, 5);
console.log(res);
export { getDiff }