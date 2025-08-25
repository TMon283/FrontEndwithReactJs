import React, { Component } from 'react';

type InitialState = {
  isLoggedIn: boolean;
};

export default class LoginStatus extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>
          {this.state.isLoggedIn ? 'Xin chào, User!' : 'Vui lòng đăng nhập để tiếp tục'}
        </h2>
        <button onClick={this.toggleLogin}>
          {this.state.isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
        </button>
      </div>
    );
  }
}
