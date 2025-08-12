class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        console.log(`Area: ${this.radius * this.radius * 3.14}`);
    }
    calculatePerimeter() {
        console.log(`Perimeter: ${2 * this.radius * 3.14}`);
    }
}
class _Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log(`Area: ${this.width * this.height}`);
    }
    calculatePerimeter() {
        console.log(`Perimeter: ${2 * (this.width + this.height)}`);
    }
}
const circle = new Circle(5);
const _rectangle = new _Rectangle(5, 6);
circle.calculateArea();
circle.calculatePerimeter();
_rectangle.calculateArea();
_rectangle.calculatePerimeter();
