class Employee {
    constructor(name, phone, company) {
        this.name = name,
            this.company = company,
            this.phone = phone;
    }
    printinfo() {
        console.log(`Name : ${this.name} Company : ${this.company}  Phone :${this.phone}`);
    }
}
let employee = new Employee("Hoàng Thái Minh", "ABC", "0332375399");
employee.printinfo();
