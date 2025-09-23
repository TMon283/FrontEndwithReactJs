import {
  DollarOutlined,
  FileOutlined,
  FundOutlined,
  LeftOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ScheduleOutlined from "@ant-design/icons/lib/icons/ScheduleOutlined";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClick } from "../store/slice/menuSlice";

export default function Menu() {
  const result = useSelector((state: any) => state.menu.flag);
  const dispatch = useDispatch();

  const handleOutLined = () => {
    dispatch(handleClick());
  };

  return (
    <div>
        <h1>Bai 5</h1>
      <div>
        <ScheduleOutlined />
        {!result && <span>Bảng điều khiển</span>}
      </div>

      <div>
        <UserOutlined />
        {!result && <span>Tài khoản</span>}
      </div>

      <div>
        <DollarOutlined />
        {!result && <span>Tài sản</span>}
      </div>

      <div>
        <FundOutlined />
        {!result && <span>Thống kê</span>}
      </div>

      <div>
        <FileOutlined />
        {!result && <span>Tài liệu</span>}
      </div>

      <div onClick={handleOutLined}>
        {result ? (
          <RightOutlined />
        ) : (
          <div>
            <LeftOutlined />
            <span>Thu gọn</span>
          </div>
        )}
      </div>
    </div>
  );
}
