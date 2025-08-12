class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string 
    ) {}
}

class Member {
    constructor(
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks: LendedBook[] = [],
        public status: string 
    ) {}
}

class LendedBook {
    constructor(
        public memberId: number,
        public bookId: number,
        public dueDate: Date
    ) {}
}

class Library {
    books: Book[] = []
    members: Member[] = []

    addBook(book: Book): void {
        this.books.push(book)
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.")
            return
        }
        console.log("Danh sách sách trong thư viện:")
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Stock: ${book.stock}, Status: ${book.status}`)
        })
    }
}

const myLibrary = new Library()

const book1 = new Book(1, "Lập Trình JavaScript", "Nguyễn Văn A", 3, "available")
const book2 = new Book(2, "Học TypeScript", "Trần Thị B", 5, "available")
const book3 = new Book(3, "Thuật Toán Nâng Cao", "Lê Văn C", 2, "available")

myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)

myLibrary.showBooks()