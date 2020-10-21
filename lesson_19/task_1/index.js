const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};

const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
    },
    stopMachine() {
        console.log(`${this.name} lifting anchor down`);
    },
}
Object.setPrototypeOf(ship, vehicle);
ship.move();
ship.stop();
export { vehicle, ship }