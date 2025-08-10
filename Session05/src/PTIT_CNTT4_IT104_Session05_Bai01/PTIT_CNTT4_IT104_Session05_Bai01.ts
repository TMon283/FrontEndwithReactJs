class Vehicle {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getVehicleInfo(){
        console.log(`Tên: ${this.name}. Sản xuất năm: ${this.year}. Hãng: ${this.company}`);
    }
}

const car1 = new Vehicle("VF5", 2020, "VinFast");
const car2 = new Vehicle("Audi", 2020, "Audi");
car1.getVehicleInfo();
car2.getVehicleInfo();