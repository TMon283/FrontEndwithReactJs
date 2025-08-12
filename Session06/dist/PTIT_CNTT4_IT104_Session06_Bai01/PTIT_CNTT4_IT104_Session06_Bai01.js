class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(`Tên của hình là ${this.name}`);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle("hình chữ nhật", 4, 6);
rectangle.getName();
console.log(`Diện tích là ${rectangle.getSize()}`);
