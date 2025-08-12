abstract class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name}`);
  }
}

class Student extends Person {
  public id: number;

  constructor(name: string, id: number) {
    super(name);
    this.id = id;
  }

  displayInfo(): void {
    console.log(`Mã SV: ${this.id} Tên: ${this.name}`);
  }
}

class Teacher extends Person {
  public subject: string;

  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }

  displayInfo(): void {
    console.log(`Tên: ${this.name} Môn giảng dạy: ${this.subject}`);
  }
}
