const getDiff = (startDate, endDate) => {
    let getNewDate = new Date(startDate - endDate);

    if (startDate < endDate) {
        return getNewDate = new Date(endDate - startDate);
    }

    let newDay = getNewDate.getDate();
    let newHour = getNewDate.getHours();
    let newMin = getNewDate.getMinutes();
    let newSec = getNewDate.getSeconds();
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
}

const res = getDiff(new Date(2019, 2, 26, 6), 2022, 6, 30, 15);
console.log(res);