import { HeartFilled } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatue } from "../store/slice/favoritesSlice";

export default function Favorites() {
  const users = useSelector((state: any) => state.favorites.user);
  const dispatch = useDispatch();

  const handleChangeFavorites = (id: number) => {
    dispatch(changeStatue(id));
  };

  return (
    <div>
        <h1>Bai 7</h1>
      {users.map((value: any) => (
        <div key={value.id}>
          <p>UserName: {value.userName}</p>
          <p>
            Favorites:{" "}
            <HeartFilled
              onClick={() => handleChangeFavorites(value.id)}
              style={{ color: value.status ? "red" : "" }}
            />
          </p>
        </div>
      ))}
    </div>
  );
}
