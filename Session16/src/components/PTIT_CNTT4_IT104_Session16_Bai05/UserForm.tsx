import React, { Component } from 'react'

type Student = {
  name: string,
  email: string,
  age: number | null
}
type State = {
  student: Student,
  error: string
  isCheck: boolean
}
export default class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      student: { name: "", email: "", age: null },
      error: "",
      isCheck: false
    }
  }
  handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    const { name, email, age } = this.state.student;
    if (name === "" || email === "" || age === null) {
      this.setState({ error: "Không được để trống thông tin", isCheck: false });
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      this.setState({ error: "Email không hợp lệ", isCheck: false });
      return;
    }
    if (age < 0) {
      this.setState({ error: "Tuổi không được âm", isCheck: false });
      return;
    }
    this.setState({ error: "", isCheck: true });
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      student: {
        ...this.state.student,
        [name]: name === "age" ? Number(value) : value
      }
    });
  }
  render() {
    return (
      <div>
        <form action="">
            <input type="text" name="name" placeholder='Họ tên' onChange={this.handleChange} /><br />
            <input type="email" name="email" placeholder='Email' onChange={this.handleChange} /><br />
            <input type="number" name="age" placeholder='Tuổi' onChange={this.handleChange} /><br />
            <button onClick={this.handleSend}>Gửi</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="reset">Xóa tất cả</button>
        </form>
        {this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>}
        {this.state.isCheck && (
          <div>
        <p>Họ và tên : {this.state.student.name}</p>
        <p>Email : {this.state.student.email}</p>
          <p>Tuổi: {this.state.student.age}</p>
          </div>
        )}
      </div>
    )
  }
}