const delay = str => {
    const p = new Promise((resolve) => {
            setTimeout(() => {
                resolve(str)
            }, 3000)
        })
        .then(data => {
            console.log(data);
        });
    return p;
}
delay('Done')