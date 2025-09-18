import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state:any) => state.profile);

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Họ và tên:</strong> {user.fullName}</p>
      <p><strong>Giới tính:</strong> {user.gender}</p>
      <p><strong>Ngày sinh:</strong> {user.dateOfBirth}</p>
      <p><strong>Địa chỉ:</strong> {user.address}</p>
    </div>
  );
}