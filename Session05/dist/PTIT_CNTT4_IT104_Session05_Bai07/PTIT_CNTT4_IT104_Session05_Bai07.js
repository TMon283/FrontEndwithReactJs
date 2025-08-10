class _Book {
    constructor(id, title, author) {
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
    setTitle(title) {
        this.title = title;
    }
    setAuthor(author) {
        this.author = author;
    }
}
class _Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    printBook() {
        for (let i = 0; i < this.books.length; i++) {
            console.log(`Tên: ${this.books[i].getTitle()} | Tác giả: ${this.books[i].getAuthor()}`);
        }
    }
    updateBook(id, newTitle, newAuthor) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books[i].setTitle(newTitle);
                this.books[i].setAuthor(newAuthor);
                return;
            }
        }
        console.log(`Không tìm thấy sách`);
    }
}
let b1 = new _Book(1, "Q1", "Giải tích");
let b2 = new _Book(2, "Q2", "Doraemon");
let b3 = new _Book(3, "Q3", "Hồ sơ máu");
let b4 = new _Book(4, "Q4", "Tam quốc diễn nghĩa");
let b5 = new _Book(5, "Q5", "Cho tôi một vé về tuổi thơ");
let _library = new _Library();
_library.addBook(b1);
_library.addBook(b2);
_library.addBook(b3);
_library.addBook(b4);
_library.addBook(b5);
_library.printBook();
_library.updateBook(1, "Q1", "Lập trình hướng đối tượng");
console.log("Sau cập nhật:");
_library.printBook();
