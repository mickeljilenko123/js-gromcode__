const pinger = (num, pingers) => {
    let i = num;
    const interval = setInterval(() => {
        if (i-- > 0) {
            console.log('Ping');
        } else {
            clearInterval(interval);
        }
    }, pingers);


    // setTimeout(() => {
    //     clearInterval(interval);
    // }, num * pingers);
};
//pinger(5, 1000);
export { pinger }