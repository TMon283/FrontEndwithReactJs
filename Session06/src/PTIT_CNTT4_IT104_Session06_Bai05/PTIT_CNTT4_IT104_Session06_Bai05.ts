interface changeSpeed {
    speedUp(): number;
    slowDown(): number;
    stop(): number;
}

class Vehicle implements changeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }

    speedUp(): number {
        this.speed += 5;
        return this.speed;
    }

    slowDown(): number {
        this.speed -= 5;
        return this.speed;
    }

    stop(): number {
        this.speed = 0;
        return this.speed;
    }

    printSpeed(): void {
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
