import React, { Component, createRef } from 'react';

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type State = {
  user: User;
};

export default class Login extends Component<{}, State> {
  emailInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        phone: '',
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state.user;

    if (!email || !password) {
      alert('Đăng nhập thất bại');
      return;
    }

    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users: User[] = JSON.parse(storedUsers);
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        alert(`Đăng nhập thành công`);
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      } else {
        alert('Đăng nhập thất bại');
      }
    } else {
      alert('Không tìm thấy tài khoản nào');
    }

    this.setState({
      user: {
        name: '',
        email: '',
        password: '',
        phone: '',
      },
    });

    this.emailInputRef.current?.focus();
  };

  render() {
    const { email, password } = this.state.user;

    return (
      <div>
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label><br />
          <input
            type="text"
            name="email"
            ref={this.emailInputRef}
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

          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    );
  }
}
