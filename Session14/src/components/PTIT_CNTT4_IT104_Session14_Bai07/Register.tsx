import React, { Component, createRef } from 'react';

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type InitialState = {
  user: User;
  message: string;
};

export default class Exercise07 extends Component<object, InitialState> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        phone: '',
      },
      message: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value },
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.checkSubmit();
  };

  checkSubmit = () => {
    const { name, email, password, phone } = this.state.user;

    if (!name || !email || !password) {
      this.setState({ message: 'Vui lòng nhập đầy đủ thông tin bắt buộc' });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const isDuplicate = existingUsers.some((user: User) => user.email === email);
    if (isDuplicate) {
      this.setState({ message: 'Email đã tồn tại. Vui lòng dùng email khác' });
      return;
    }

    const newUsers = [...existingUsers, { name, email, password, phone }];
    localStorage.setItem('users', JSON.stringify(newUsers));

    this.setState({
      user: { name: '', email: '', password: '', phone: '' },
      message: 'Đăng ký tài khoản thành công',
    });
    this.nameInputRef.current?.focus();
  };

  render() {
    const { name, email, password, phone } = this.state.user;
    const { message } = this.state;

    return (
      <div>
        <h2><b>Đăng ký tài khoản</b></h2>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên</label><br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            ref={this.nameInputRef}
          /><br />

          <label>Email</label><br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          /><br />

          <label>Mật khẩu</label><br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          /><br />

          <label>Số điện thoại</label><br />
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          /><br /><br />

          <button type="submit">Đăng ký</button>
        </form>

        {message && <p style={{ color: 'red', marginTop: '15px' }}>{message}</p>}
      </div>
    );
  }
}
