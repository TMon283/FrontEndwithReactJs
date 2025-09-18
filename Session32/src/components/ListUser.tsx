import { useSelector } from "react-redux";

export default function ListUser() {
  const users = useSelector((state:any) => state.users);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user:any) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.address}</td>
              <td>
                <button style={{color:"blue", marginRight:"10px"}}>Sửa</button>
                <button style={{color:"red"}}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}