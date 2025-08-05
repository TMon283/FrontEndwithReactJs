const student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        {subject: "Math", score: 9},
        {subject: "English", score: 7.5},
        {subject: "Physics", score: 6},
        {subject: "Literature", score: 8.5}
    ]
}

function getStudentSummary(student) {
    const getScore = student.listMonhoc.map(m=>m.score);
    const avgScore = getScore.reduce((sum, score)=>sum+score, 0) / getScore.length;
    let studentSummary;
    if (avgScore >= 8.5) {
        studentSummary = "giỏi";
    } else if (avgScore >= 7) {
        studentSummary = "khá";
    } else if (avgScore >= 5) {
        studentSummary = "trung bình";
    } else {
        studentSummary = "yếu";
    } 
    return `${student.name} is ${student.age} years old.
Average score is ${avgScore.toFixed(2)} -> Học sinh ${studentSummary}.
BestSubject: ${student.listMonhoc.reduce((best, current) => current.score > best.score ? current : best).subject}.
WeakestSubject: ${student.listMonhoc.reduce((weak, current) => current.score < weak.score ? current : weak).subject}.
`
}

console.log(getStudentSummary(student));
