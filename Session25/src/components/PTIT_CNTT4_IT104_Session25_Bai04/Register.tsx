import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { NavLink } from "react-router-dom";

const Register: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Đăng ký thành công:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Đăng ký thất bại:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)",
      }}
    >
      <div
        style={{
          width: 380,
          backgroundColor: "#fff",
          padding: "32px 28px",
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 24 }}>Đăng ký</h2>

        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
          >
            <Input placeholder="Tên người dùng" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Vui lòng xác nhận mật khẩu!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu" />
          </Form.Item>

          <Form.Item name="agree" valuePropName="checked">
            <Checkbox>Tôi đồng ý với điều khoản sử dụng</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <span>Đã có tài khoản? </span>
            <NavLink to="/login">Đăng nhập ngay</NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register