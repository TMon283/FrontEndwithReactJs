import React from "react";
import { Link } from "react-router-dom";
export interface IDDataTask {
  id: number;
  title: string;
  description: string;
}

export const tasks: IDDataTask[] = [
  {
    id: 1,
    title: "Hoc React Router",
    description: "lam quen voi Dynamic Routers va useNAvigate",
  },
  {
    id: 2,
    title: "On tap lai tailwind",
    description: "Thuc hanh tao UI co ban bang Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoan thanh BTVN",
    description: "Day code len git va nop link",
  },
];
export default function TaskList() {
  return (
    <>
      <h2>Danh sach song viec</h2>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        {tasks.map((v: any, i: number) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              border: "1px solid black",
              justifyContent:"center"
            }}
          >
            <p>
              <b>{v.title}</b>
            </p>
            <p>{v.description}</p>
            <div
              style={{
                width: "100px",
                height: "30px",
                background: "blue",
                lineHeight: "30px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              <Link
                to={`/task/${v.id}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                Xem chi tiet
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}