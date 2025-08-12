interface Geometry {
    calculateArea(): void;
    calculatePerimeter(): void;
}

class Circle implements Geometry {
    private radius: number;
    constructor (radius: number) {
        this.radius = radius;
    }
    calculateArea(): void {
        console.log(`Area: ${this.radius * this.radius * 3.14}`);
    }
    calculatePerimeter(): void {
        console.log(`Perimeter: ${2 * this.radius * 3.14}`);
    }
}

class _Rectangle implements Geometry {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    calculateArea(): void {
        console.log(`Area: ${this.width * this.height}`);
    }
    calculatePerimeter(): void {
        console.log(`Perimeter: ${2 * (this.width + this.height)}`);
    }
}

const circle = new Circle(5);
const _rectangle = new _Rectangle(5, 6);
circle.calculateArea();
circle.calculatePerimeter();
_rectangle.calculateArea();
_rectangle.calculatePerimeter();