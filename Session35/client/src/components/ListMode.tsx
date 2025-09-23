import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { compact } from "../store/slice/listModeSlice";

export default function ListMode() {
  const number = [1, 2, 3, 4, 5];
    const reslut = useSelector((data:any) => {
        return data.listMode.status
    })
    const dispatch = useDispatch();
    const handleListMode = () => { 
         dispatch(compact());
    }
  return (
    <>
    <h1>BAi4 </h1>
      <button onClick={handleListMode}>list Mode</button>
      <div style={{
        display: "flex",
        flexDirection : reslut === true ? "column" : "row",
        gap:"20px"
      }}>
        {number.map((value: any, index: number) => {
          return (
            <p
              style={{
                width: "100px",
                height: "30px",
                border: "1px solid red",
                backgroundColor: "red",
                textAlign: "center",
                lineHeight: "30px",
                color: "white",
              }}
            >
              {value}
            </p>
          );
        })}
      </div>
    </>
  );
}