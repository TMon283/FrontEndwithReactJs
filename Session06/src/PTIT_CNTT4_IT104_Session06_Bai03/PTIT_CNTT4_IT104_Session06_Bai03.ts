abstract class Animal {
    constructor(public name: string) {}
    speak(): void {
        console.log(`${this.name} phát ra âm thanh.`);
    }
    abstract move(): void;
}

class Dog extends Animal {
    move(): void {
        console.log(`${this.name} chạy bằng bốn chân.`);
    }
    speak(): void {
        console.log(`${this.name} sủa: Gâu gâu!`);
    }
}

const dog = new Dog("Chó Vàng");
dog.speak(); 
dog.move();  

// method thông thường có thể dùng lại hoặc ghi đè, còn abstract method khi sử dụng phải định nghĩa lại cho phương thức
// Nên sử dụng method khi: phương thức không bắt buộc phải thay đổi ở mỗi lớp con
// Nên sử dụng abstract method khi: hành vi ở lớp cha không thể xác định rõ ràng, phụ thuộc vào từng lớp con, nên sẽ 
// ép tất cả lớp con phải tự định nghĩa lại hành vi đó