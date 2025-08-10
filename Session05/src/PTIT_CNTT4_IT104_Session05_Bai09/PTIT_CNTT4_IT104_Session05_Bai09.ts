class ___Book {
    private id: number;
    private title: string;
    private author: string;
    private year: number;

    constructor(id: number, title: string, author: string, year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
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
    getYear() {
        return this.year;
    }
    setTitle(title: string) {
        this.title = title;
    }
    setAuthor(author: string) {
        this.author = author;
    }
    setYear(year: number) {
        this.year = year;
    }
}

class ___Library {
    books: ___Book[] = [];

    addBook(book: ___Book) {
        this.books.push(book);
    }
    printBook() {
        for (let book of this.books) {
            console.log(`ID: ${book.getId()} | Tên: ${book.getTitle()} | Tác giả: ${book.getAuthor()} | Năm: ${book.getYear()}`);
        }
    }
    updateBook(id: number, newTitle: string, newAuthor: string) {
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                return;
            }
        }
        console.log(`Không tìm thấy sách`);
    }
    updateBookById(id: number, newTitle: string, newAuthor: string, newYear: number) {
        for (let book of this.books) {
            if (book.getId() === id) {
                book.setTitle(newTitle);
                book.setAuthor(newAuthor);
                book.setYear(newYear);
                return;
            }
        }
        console.log(`Không tìm thấy sách để cập nhật`);
    }
    deleteBookById(id: number) {
        const index = this.books.findIndex(book => book.getId() === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Đã xóa sách có ID: ${id}`);
        } else {
            console.log(`Không tìm thấy sách để xóa`);
        }
    }
    seachBook(name: string) {
        let found = false;
        for (let book of this.books) {
            if (book.getTitle().toLowerCase().includes(name.toLowerCase())) {
                console.log(`ID: ${book.getId()} | Tên: ${book.getTitle()} | Tác giả: ${book.getAuthor()} | Năm: ${book.getYear()}`);
                found = true;
            }
        }
        if (!found) {
            console.log(`Không tìm thấy sách`);
        }
    }
}

let __b1 = new ___Book(1, "Q1", "Giải tích", 2010);
let __b2 = new ___Book(2, "Q2", "Doraemon", 2005);
let __b3 = new ___Book(3, "Q3", "Hồ sơ máu", 2018);
let __b4 = new ___Book(4, "Q4", "Tam quốc diễn nghĩa", 1990);
let __b5 = new ___Book(5, "Q5", "Cho tôi một vé về tuổi thơ", 2012);

let ___library = new ___Library();
___library.addBook(__b1);
___library.addBook(__b2);
___library.addBook(__b3);
___library.addBook(__b4);
___library.addBook(__b5);

___library.printBook();

___library.updateBook(1, "Q1", "Lập trình hướng đối tượng");
___library.printBook();

___library.seachBook("Giải");

___library.updateBookById(2, "Doraemon - Tập đặc biệt", "Fujiko F. Fujio", 2020);
___library.printBook();

___library.deleteBookById(3);
___library.printBook();
