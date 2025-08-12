abstract class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  printName(): void {
    console.log(`Tên động vật: ${this.name}`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("meo meo");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("gâu gâu");
  }
}

const myCat = new Cat("Miu Miu");
const myDog = new Dog("Kimure");

myCat.printName();   
myCat.makeSound();   

myDog.printName();   
myDog.makeSound();   