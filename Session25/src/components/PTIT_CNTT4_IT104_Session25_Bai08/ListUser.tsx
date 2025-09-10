import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultUsers = [
  { id: 1, name: "Nguyen Van A", email: "nva@gmail.com", address: "Ha Noi" },
  { id: 2, name: "Nguyen Van B", email: "nvb@gmail.com", address: "Ha Nam" },
  { id: 3, name: "Nguyen Van C", email: "nvc@gmail.com", address: "Ninh Binh" },
];

export default function ListUser() {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      setUsers(JSON.parse(data));
    } else {
      setUsers(defaultUsers);
      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  const handleClick = (value: any) => {
    navigate(`/listUser/${value.id}`, { state: value });
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {users.map((v) => (
        <div
          key={v.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p><b>Id:</b> {v.id}</p>
          <p><b>Username:</b> {v.name}</p>
          <p><b>Email:</b> {v.email}</p>
          <p><b>Address:</b> {v.address}</p>
          <button onClick={() => handleClick(v)}>Xem chi tiết</button>
        </div>
      ))}
    </div>
  );
}