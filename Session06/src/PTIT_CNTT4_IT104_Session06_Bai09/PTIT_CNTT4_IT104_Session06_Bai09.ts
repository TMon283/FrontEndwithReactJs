class BookX {
    constructor(
        public bookIdX: number,
        public bookTitleX: string,
        public bookAuthorX: string,
        public bookStockX: number,
        public bookStatusX: string
    ) {}
}

class LendedBookZ {
    constructor(
        public memberIdZ: number,
        public bookIdZ: number,
        public dueDateZ: Date
    ) {}
}

class MemberZ {
    constructor(
        public memberIdZ: number,
        public memberNameZ: string,
        public memberContactZ: string,
        public borrowedBooksZ: LendedBookZ[] = [],
        public memberStatusZ: string = "active"
    ) {}
}

class LibraryV2 {
    private bookListV2: BookX[] = []
    private memberListV2: MemberZ[] = []

    addBookV2(bookX: BookX): void {
        this.bookListV2.push(bookX)
    }

    displayBooksV2(): void {
        if (this.bookListV2.length === 0) {
            console.log("Thư viện chưa có sách.")
            return
        }
        console.log("Danh sách sách trong thư viện:")
        this.bookListV2.forEach(book => {
            console.log(`ID: ${book.bookIdX}, Title: ${book.bookTitleX}, Author: ${book.bookAuthorX}, Stock: ${book.bookStockX}, Status: ${book.bookStatusX}`)
        })
    }

    registerMemberV2(memberIdZ: number, memberNameZ: string, memberContactZ: string): void {
        const newMemberZ = new MemberZ(memberIdZ, memberNameZ, memberContactZ)
        this.memberListV2.push(newMemberZ)
        console.log(`Đã đăng ký thành viên: ${memberNameZ}`)
    }

    blockMemberV2(memberIdZ: number): void {
        const memberZ = this.memberListV2.find(m => m.memberIdZ === memberIdZ)
        if (memberZ) {
            memberZ.memberStatusZ = "blocked"
            console.log(`Đã khóa tài khoản của thành viên ID: ${memberIdZ}`)
        } else {
            console.log(`Không tìm thấy thành viên ID: ${memberIdZ}`)
        }
    }

    displayMembersV2(): void {
        if (this.memberListV2.length === 0) {
            console.log("Thư viện chưa có thành viên.")
            return
        }
        console.log("Danh sách thành viên:")
        this.memberListV2.forEach(m => {
            console.log(`ID: ${m.memberIdZ}, Name: ${m.memberNameZ}, Contact: ${m.memberContactZ}, Status: ${m.memberStatusZ}`)
        })
    }
}

const libraryX = new LibraryV2()

libraryX.addBookV2(new BookX(1, "Lập Trình JavaScript", "Nguyễn Văn A", 3, "available"))
libraryX.addBookV2(new BookX(2, "Học TypeScript", "Trần Thị B", 5, "available"))

libraryX.displayBooksV2()

libraryX.registerMemberV2(101, "An", "an@example.com")
libraryX.registerMemberV2(102, "Bình", "binh@example.com")
libraryX.registerMemberV2(103, "Chi", "chi@example.com")

libraryX.displayMembersV2()

libraryX.blockMemberV2(102)

libraryX.displayMembersV2()
