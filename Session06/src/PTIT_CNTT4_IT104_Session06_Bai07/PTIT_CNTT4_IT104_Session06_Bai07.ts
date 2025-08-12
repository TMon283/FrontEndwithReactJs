class StudentX {
    private studentIdX: number
    private fullNameX: string

    constructor(studentIdX: number, fullNameX: string) {
        this.studentIdX = studentIdX
        this.fullNameX = fullNameX
    }

    getIdX(): number {
        return this.studentIdX
    }

    getNameX(): string {
        return this.fullNameX
    }

    setNameX(newNameX: string): void {
        this.fullNameX = newNameX
    }

    toStringX(): string {
        return `ID: ${this.studentIdX}, Name: ${this.fullNameX}`
    }
}

const studentPoolX: StudentX[] = []

class ClassroomZ {
    private enrolledStudentsZ: StudentX[] = []

    displayStudentsZ(): void {
        if (this.enrolledStudentsZ.length === 0) {
            console.log("Lớp chưa có học sinh nào.")
            return
        }
        this.enrolledStudentsZ.forEach(student => console.log(student.toStringX()))
    }

    enrollStudentZ(student: StudentX): void {
        this.enrolledStudentsZ.push(student)
    }

    findStudentByIdZ(studentIdX: number): StudentX[] {
        return this.enrolledStudentsZ.filter(student => student.getIdX() === studentIdX)
    }

    moveStudentFromPoolZ(studentIdX: number): void {
        const index = studentPoolX.findIndex(student => student.getIdX() === studentIdX)
        if (index !== -1) {
            const [student] = studentPoolX.splice(index, 1)
            this.enrolledStudentsZ.push(student)
        } else {
            console.log(`Không tìm thấy học sinh có ID ${studentIdX}`)
        }
    }

    removeStudentZ(studentIdX: number): void {
        const index = this.enrolledStudentsZ.findIndex(student => student.getIdX() === studentIdX)
        if (index !== -1) {
            const [student] = this.enrolledStudentsZ.splice(index, 1)
            studentPoolX.push(student)
        } else {
            console.log(`Không tìm thấy học sinh có ID ${studentIdX} trong lớp`)
        }
    }

    updateStudentNameZ(studentIdX: number, newNameX: string): void {
        const student = this.enrolledStudentsZ.find(student => student.getIdX() === studentIdX)
        if (student) {
            student.setNameX(newNameX)
        } else {
            console.log(`Không tìm thấy học sinh có ID ${studentIdX} trong lớp`)
        }
    }
}

studentPoolX.push(new StudentX(1, "An"))
studentPoolX.push(new StudentX(2, "Bình"))
studentPoolX.push(new StudentX(3, "Chi"))
studentPoolX.push(new StudentX(4, "Dũng"))
studentPoolX.push(new StudentX(5, "Hà"))
studentPoolX.push(new StudentX(6, "Khánh"))

const classAX = new ClassroomZ()
const classBX = new ClassroomZ()

classAX.moveStudentFromPoolZ(1)
classAX.moveStudentFromPoolZ(2)
classAX.moveStudentFromPoolZ(3)

classBX.moveStudentFromPoolZ(4)
classBX.moveStudentFromPoolZ(5)
classBX.moveStudentFromPoolZ(6)

classAX.displayStudentsZ()

classAX.removeStudentZ(2)
classAX.displayStudentsZ()

classAX.updateStudentNameZ(3, "Chi Nguyễn")
classAX.displayStudentsZ()

studentPoolX.forEach(student => console.log(student.toStringX()))
