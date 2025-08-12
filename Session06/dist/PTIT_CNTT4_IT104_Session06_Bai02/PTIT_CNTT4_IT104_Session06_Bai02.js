class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Công việc: ${this.type}`);
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    calculateSalary() {
        return 10000000;
    }
}
let job1 = new PartimeJob("Frontend", 100);
let job2 = new FulltimeJob("Fullstack");
console.log(`Lương nhận được là: ${job1.calculateSalary()}`);
console.log(`Lương nhận được là: ${job2.calculateSalary()}`);
