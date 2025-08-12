abstract class Job {
    type: string;
    constructor(type: string){
        this.type = type;
    }
    printType() {
        console.log(`Công việc: ${this.type}`);
    }
    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    workingHour: number;
    constructor (type: string, workingHour: number){
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class FulltimeJob extends Job {
    calculateSalary(): number {
        return 10000000;
    }
}

let job1 = new PartimeJob("Frontend", 100);
let job2 = new FulltimeJob("Fullstack");
console.log(`Lương nhận được là: ${job1.calculateSalary()}`);
console.log(`Lương nhận được là: ${job2.calculateSalary()}`);

