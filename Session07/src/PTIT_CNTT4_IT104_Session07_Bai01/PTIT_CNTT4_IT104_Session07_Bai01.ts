class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone: ${this.phone}`);
  }
}

class Manager extends Employee {
  private teamSize: number;

  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }

  override printInfo(): void {
    super.printInfo();
    console.log(`Team Size: ${this.teamSize}`);
  }
}

const mgr = new Manager("Minh", "ABC", "0987654321", 5);
mgr.printInfo();
