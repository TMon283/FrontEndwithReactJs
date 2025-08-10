class Book {
    constructor(title, author) {
        this.title = title,
            this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setTitle(title) {
        return this.title = title;
    }
    setAuthor(author) {
        return this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    printBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Ten: ${this.books[i].getTitle()}  Ten tac gia :${this.books[i].getAuthor()}`);
        }
    }
}
let book1 = new Book("Q1", "Giải tích");
let book2 = new Book("Q2", "Doraemon");
let book3 = new Book("Q3", "Hồ sơ máu");
let book4 = new Book("Q4", "Tam quốc diễn nghĩa");
let book5 = new Book("Q5", "Cho tôi một vé về tuổi thơ");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.printBook();
