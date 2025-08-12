class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 5;
        return this.speed;
    }
    slowDown() {
        this.speed -= 5;
        return this.speed;
    }
    stop() {
        this.speed = 0;
        return this.speed;
    }
    printSpeed() {
        console.log(`Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle(20);
console.log("Tăng tốc:");
myVehicle.speedUp();
myVehicle.printSpeed();
console.log("Giảm tốc:");
myVehicle.slowDown();
myVehicle.printSpeed();
console.log("Dừng lại:");
myVehicle.stop();
myVehicle.printSpeed();
