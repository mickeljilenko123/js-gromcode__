class Vehicle {
    constructor() {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};

class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels)
        this.maxSpeed = maxSpeed;
    }
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    }


    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    }
}

export { vehicle, ship }