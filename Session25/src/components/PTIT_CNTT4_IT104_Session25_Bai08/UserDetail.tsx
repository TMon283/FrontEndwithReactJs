import { useLocation, useParams } from "react-router-dom";

export default function DetailUser() {
  const { id } = useParams();
  const location = useLocation();
  let user = location.state;

  if (!user && id) {
    const data = localStorage.getItem("users");
    if (data) {
      const users = JSON.parse(data);
      user = users.find((u: any) => u.id === Number(id));
    }
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Chi tiết user</h2>
      {user ? (
        <>
          <p><b>ID:</b> {id}</p>
          <p><b>Username:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Address:</b> {user.address}</p>
        </>
      ) : (
        <p>Không tìm thấy dữ liệu user</p>
      )}
    </div>
  );
}