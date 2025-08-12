class BookX {
    constructor(bookIdX, bookTitleX, bookAuthorX, bookStockX, bookStatusX) {
        this.bookIdX = bookIdX;
        this.bookTitleX = bookTitleX;
        this.bookAuthorX = bookAuthorX;
        this.bookStockX = bookStockX;
        this.bookStatusX = bookStatusX;
    }
}
class LendedBookZ {
    constructor(memberIdZ, bookIdZ, dueDateZ) {
        this.memberIdZ = memberIdZ;
        this.bookIdZ = bookIdZ;
        this.dueDateZ = dueDateZ;
    }
}
class MemberZ {
    constructor(memberIdZ, memberNameZ, memberContactZ, borrowedBooksZ = [], memberStatusZ = "active") {
        this.memberIdZ = memberIdZ;
        this.memberNameZ = memberNameZ;
        this.memberContactZ = memberContactZ;
        this.borrowedBooksZ = borrowedBooksZ;
        this.memberStatusZ = memberStatusZ;
    }
}
class LibraryV2 {
    constructor() {
        this.bookListV2 = [];
        this.memberListV2 = [];
    }
    addBookV2(bookX) {
        this.bookListV2.push(bookX);
    }
    displayBooksV2() {
        if (this.bookListV2.length === 0) {
            console.log("Thư viện chưa có sách.");
            return;
        }
        console.log("📚 Danh sách sách trong thư viện:");
        this.bookListV2.forEach(book => {
            console.log(`ID: ${book.bookIdX}, Title: ${book.bookTitleX}, Author: ${book.bookAuthorX}, Stock: ${book.bookStockX}, Status: ${book.bookStatusX}`);
        });
    }
    registerMemberV2(memberIdZ, memberNameZ, memberContactZ) {
        const newMemberZ = new MemberZ(memberIdZ, memberNameZ, memberContactZ);
        this.memberListV2.push(newMemberZ);
        console.log(`Đã đăng ký thành viên: ${memberNameZ}`);
    }
    blockMemberV2(memberIdZ) {
        const memberZ = this.memberListV2.find(m => m.memberIdZ === memberIdZ);
        if (memberZ) {
            memberZ.memberStatusZ = "blocked";
            console.log(`Đã khóa tài khoản của thành viên ID: ${memberIdZ}`);
        }
        else {
            console.log(`Không tìm thấy thành viên ID: ${memberIdZ}`);
        }
    }
    displayMembersV2() {
        if (this.memberListV2.length === 0) {
            console.log("Thư viện chưa có thành viên.");
            return;
        }
        console.log("👥 Danh sách thành viên:");
        this.memberListV2.forEach(m => {
            console.log(`ID: ${m.memberIdZ}, Name: ${m.memberNameZ}, Contact: ${m.memberContactZ}, Status: ${m.memberStatusZ}`);
        });
    }
}
const libraryX = new LibraryV2();
libraryX.addBookV2(new BookX(1, "Lập Trình JavaScript", "Nguyễn Văn A", 3, "available"));
libraryX.addBookV2(new BookX(2, "Học TypeScript", "Trần Thị B", 5, "available"));
libraryX.displayBooksV2();
libraryX.registerMemberV2(101, "An", "an@example.com");
libraryX.registerMemberV2(102, "Bình", "binh@example.com");
libraryX.registerMemberV2(103, "Chi", "chi@example.com");
libraryX.displayMembersV2();
libraryX.blockMemberV2(102);
libraryX.displayMembersV2();
