class Student {
   id: number;
   age: number;
   email: string;
    constructor(id: number, age: number, email: string){
        this.id = id,
        this.age = age,
        this.email = email
    }
    print(){
        console.log(`ID: ${this.id}  Tuoi:${this.age}  Email: ${this.email}`);
    }
}

let student1 = new Student(1,18,"a@gmail.com");
let student2 = new Student(2,19,"b@gmail.com");
let student3 = new Student(3,21,"c@gmail.com");
let students=[];
students.push(student1, student2, student3);
for (let i = 0; i < students.length; i++) {
    students[i].print();
}