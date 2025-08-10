class _Vehicle {
    constructor(id, name, year, company) {
        this.id = id,
            this.name = name,
            this.year = year,
            this.company = company;
    }
    print() {
        console.log(`ID: ${this.id} Name: ${this.name} Year: ${this.year} Company: ${this.company}`);
    }
}
let vehicle = new _Vehicle(1, "Hoàng Thái Minh", 2006, "ABC");
vehicle.print();
