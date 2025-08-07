interface Person {
    name: string;
    age: number
}

interface Employee {
    employeeId: string;
    department: string
}

type StaffMember = Person & Employee;

function printStaffInfo(staff: StaffMember): void {
    console.log(`${EmployeeInfo.name} (${EmployeeInfo.age} tuổi), Mã nhân viên: ${EmployeeInfo.employeeId} - Phòng: ${EmployeeInfo.department}`);
}

const EmployeeInfo: StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
}

printStaffInfo(EmployeeInfo);
