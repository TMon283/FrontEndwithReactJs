interface Student {
  id: string;
  name: string;
  finalScore?: number;
  hasCompleted: boolean;
}

interface Course {
  id: string;
  name: string;
  teacher: string;
  isOpen: boolean;
  students: Student[];
}

interface CourseManager {
  courses: Course[];
}

function inputStudent(): Student {
  const id = prompt("Nhập mã học viên:") ?? "";
  const name = prompt("Nhập tên học viên:") ?? "";
  const scoreStr = prompt("Nhập điểm cuối khóa (hoặc để trống):");
  const hasCompletedStr = prompt("Đã hoàn thành khóa học? (yes/no):");

  return {
    id,
    name,
    finalScore: scoreStr ? parseFloat(scoreStr) : undefined,
    hasCompleted: hasCompletedStr?.toLowerCase() === "yes"
  };
}

function inputCourse(): Course {
  const id = prompt("Nhập mã khóa học:") ?? "";
  const name = prompt("Nhập tên khóa học:") ?? "";
  const teacher = prompt("Nhập tên giảng viên:") ?? "";
  const isOpenStr = prompt("Khóa học đang mở? (yes/no):");
  const studentCountStr = prompt("Số lượng học viên:");

  const students: Student[] = [];
  const count = parseInt(studentCountStr ?? "0");
  for (let i = 0; i < count; i++) {
    alert(`Nhập thông tin học viên thứ ${i + 1}`);
    students.push(inputStudent());
  }

  return {
    id,
    name,
    teacher,
    isOpen: isOpenStr?.toLowerCase() === "yes",
    students
  };
}

function getCompletedStudents(course: Course): Student[] {
  return course.students.filter(student => student.hasCompleted);
}

function calculateAverageScore(course: Course): number | null {
  const scoredStudents = course.students.filter(s => typeof s.finalScore === "number");
  if (scoredStudents.length === 0) return null;

  const totalScore = scoredStudents.reduce((sum, s) => sum + (s.finalScore ?? 0), 0);
  return parseFloat((totalScore / scoredStudents.length).toFixed(2));
}

function printCourseReport(manager: CourseManager): void {
  manager.courses.forEach((course, index) => {
    const totalStudents = course.students.length;
    const completedStudents = getCompletedStudents(course).length;
    const avgScore = calculateAverageScore(course);
    const status = course.isOpen ? "ĐANG MỞ" : "ĐÃ ĐÓNG";

    console.log(`\n${index + 1}. Khóa: ${course.name} (GV: ${course.teacher})`);
    console.log(`- Tổng học viên: ${totalStudents}`);
    console.log(`- Hoàn thành: ${completedStudents} học viên`);
    console.log(`- Trung bình điểm: ${avgScore !== null ? avgScore : "Chưa có điểm"}`);
    console.log(`- Trạng thái: ${status}`);
  });
}

const courseTS: Course = {
  id: "C01",
  name: "TypeScript Cơ Bản",
  teacher: "Nguyễn Văn A",
  isOpen: true,
  students: [
    { id: "S01", name: "Minh", finalScore: 9, hasCompleted: true },
    { id: "S02", name: "Lệ", finalScore: 8, hasCompleted: true },
    { id: "S03", name: "Tuấn", finalScore: 8.5, hasCompleted: true },
    { id: "S04", name: "Hà", hasCompleted: false }
  ]
};

const courseReact: Course = {
  id: "C02",
  name: "React Nâng Cao",
  teacher: "Trần Thị B",
  isOpen: false,
  students: [
    { id: "S05", name: "Thanh", finalScore: 7.5, hasCompleted: true },
    { id: "S06", name: "Khánh", finalScore: 6.2, hasCompleted: true },
    { id: "S07", name: "Dũng", hasCompleted: false }
  ]
};

const manager: CourseManager = {
  courses: [courseTS, courseReact]
};

printCourseReport(manager);

