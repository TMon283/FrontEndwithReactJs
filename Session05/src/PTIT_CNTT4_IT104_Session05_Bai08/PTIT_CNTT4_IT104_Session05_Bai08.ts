class __Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title: string) {
        this.title = title;
    }
    setAuthor(author: string) {
        this.author = author;
    }
}

class __Library {
    books: __Book[] = [];

    addBook(book: __Book) {
        this.books.push(book);
    }

    printBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Tên: ${this.books[i].getTitle()} | Tác giả: ${this.books[i].getAuthor()}`);
        }
    }

    updateBook(id: number, newTitle: string, newAuthor: string) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books[i].setTitle(newTitle);
                this.books[i].setAuthor(newAuthor);
                return;
            }
        }
        console.log(`Không tìm thấy sách`);
    }
    seachBook(name: string){
    let check = -1;
    for (let i = 0; i < this.books.length; i++) {
        if(this.books[i].getTitle().toLowerCase().includes(name.toLowerCase())){
               console.log(`ID : ${this.books[i].getId()} Ten: ${this.books[i].getTitle()} Ten tac gia :${this.books[i].getAuthor()}`);
               check++;
        }
    }
    if (check == -1) {
        console.log(`Không tìm thấy sách`);
        
    }
}
}

let _b1 = new __Book (1, "Q1", "Giải tích");
let _b2 = new __Book (2, "Q2", "Doraemon");
let _b3 = new __Book (3, "Q3", "Hồ sơ máu");
let _b4 = new __Book (4, "Q4", "Tam quốc diễn nghĩa");
let _b5 = new __Book (5, "Q5", "Cho tôi một vé về tuổi thơ");

let __library = new __Library();
__library.addBook(_b1);
__library.addBook(_b2);
__library.addBook(_b3);
__library.addBook(_b4);
__library.addBook(_b5);
__library.printBook();

__library.updateBook(1, "Q1", "Lập trình hướng đối tượng");
console.log("Sau cập nhật:");
__library.printBook();

__library.seachBook("Giải");