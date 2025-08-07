function printStaffInfo(staff) {
    console.log(`${EmployeeInfo.name} (${EmployeeInfo.age} tuổi), Mã nhân viên: ${EmployeeInfo.employeeId} - Phòng: ${EmployeeInfo.department}`);
}
const EmployeeInfo = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(EmployeeInfo);
