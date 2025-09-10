import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import type { FormProps } from "antd";
import { NavLink } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  return (
    <div
      className="centered-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, padding: 24, backgroundColor: "#fff", borderRadius: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3 style={{ textAlign: "center", marginBottom: 24 }}>Đăng nhập tài khoản</h3>

        <Form.Item<FieldType>
          label="Tên người dùng"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          label={null}
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Ghi nhớ đăng nhập</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <p style={{ marginBottom: 12 }}>
            Nếu bạn chưa có tài khoản, hãy <NavLink to="/register">đăng ký tại đây</NavLink>.
          </p>
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}