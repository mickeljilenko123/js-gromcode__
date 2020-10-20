const timer = {
    secondPassed: 0,
    minsPassed: 0,
    timerId: 0,
    startTimer() {

        //fix context with bind
        //Когда мы передаем любую функцию 
        // которая использует контекст в колбек
        // то есть как параметр для другой функции, то всегда теряется контекст
        // должен быть закриплен контекст через bind() 
        // или использовать стрелочную функцию
        // const adder = function() {
        //     console.log(this);
        //     this.secondPassed += 1;
        // };
        // const currentAdder = adder.bind(this);
        // setInterval(currentAdder, 1000);
        //fix context with arrow func

        setInterval(() => {
            this.secondPassed + 1;
            if (this.secondPassed === 60) {
                this.minsPassed += 1;
                this.secondPassed = 0;
            }
        }, 1000);
    },
    stopTimer() {
        clearInterval(this.timerId);
        this.timerId = null;
    },
    getTime() {
        console.log(`${this.minsPassed}:${this.secondPassed}`);
    },
    resetTimer() {
        this.secondPassed = 0;
        this.minsPassed = 0;
    },
};
timer.startTimer();
export { timer }




// const user = {
//         name: 'Test',
//         run() {
//             console.log(this);
//         }
//     }
// user.run();

// const func = user.run;
// func();