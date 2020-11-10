const pinger = (num, pingers) => {
    let i = num;
    const interval = setInterval(() => {
        if (i-- > 0) {
            console.log('ping');
        } else {
            clearInterval(interval);
        }
    }, pingers);


    // setTimeout(() => {
    //     clearInterval(interval);
    // }, num * pingers);
};
pinger(5, 1000);