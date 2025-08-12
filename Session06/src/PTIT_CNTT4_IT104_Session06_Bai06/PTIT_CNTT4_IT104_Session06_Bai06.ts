class Student {
    private id: number
    private name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    toString(): string {
        return `ID: ${this.id}, Name: ${this.name}`
    }
}

const allStudents: Student[] = []

class Classroom {
    students: Student[] = []

    showStudents(): void {
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh nào.")
            return
        }
        this.students.forEach(s => console.log(s.toString()))
    }

    addStudent(student: Student): void {
        this.students.push(student)
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(s => s.getId() === id)
    }

    addStudentInClass(studentId: number): void {
        const index = allStudents.findIndex(s => s.getId() === studentId)
        if (index !== -1) {
            const [student] = allStudents.splice(index, 1)
            if (student) {
                this.students.push(student)
            }
        } else {
            console.log(`Không tìm thấy học sinh có ID ${studentId}`)
        }
    }
}

allStudents.push(new Student(1, "An"))
allStudents.push(new Student(2, "Bình"))
allStudents.push(new Student(3, "Chi"))
allStudents.push(new Student(4, "Dũng"))
allStudents.push(new Student(5, "Hà"))
allStudents.push(new Student(6, "Khánh"))

const classA = new Classroom()
const classB = new Classroom()

classA.addStudentInClass(1)
classA.addStudentInClass(2)
classA.addStudentInClass(3)

classB.addStudentInClass(4)
classB.addStudentInClass(5)
classB.addStudentInClass(6)

console.log("== Lớp A ==")
classA.showStudents()
console.log("== Lớp B ==")
classB.showStudents()
console.log("== allStudents sau khi phân lớp ==")
console.log(allStudents)