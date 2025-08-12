class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên động vật: ${this.name}`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("gâu gâu");
    }
}
const myCat = new Cat("Miu Miu");
const myDog = new Dog("Kimure");
myCat.printName();
myCat.makeSound();
myDog.printName();
myDog.makeSound();
