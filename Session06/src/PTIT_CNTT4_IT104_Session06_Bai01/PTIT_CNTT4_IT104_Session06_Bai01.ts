abstract class Shape {
    name: string;
    constructor (name: string) {
        this.name = name;
    }    
    getName() {
        console.log(`Tên của hình là ${this.name}`);
    }
    abstract getSize(): number;
}

class Rectangle extends Shape {
    constructor (name: string, private width: number, private height: number) {
        super(name);
    }
    getSize(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle ("hình chữ nhật", 4, 6);
rectangle.getName();
console.log(`Diện tích là ${rectangle.getSize()}`);
