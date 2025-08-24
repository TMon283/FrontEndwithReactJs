// import React, { Component } from 'react'
// type User={
//     email: string,
//     password: string
// }
// type InitialState={
//     user: User
// }
// export default class Controll extends Component<object, InitialState> {
//     constructor(props:object){
//         super(props);
//         this.state={
//             user: {
//                 email:"",
//                 password:""
//             }
//         }
//     }
//     handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
//         e.preventDefault();
//         this.setState({user:{email:"", password:""}});
//     }
//     handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//         const {name, value} = e.target;
//         this.setState({
//             user:{...this.state.user, [name]:value}
//         })
//     }
//   render() {
//     return (
//       <div>
//         Form dùng kĩ thuật Controll
//         <form onSubmit={this.handleSubmit}>
//             <label htmlFor="">Email</label>
//             <input type="text" name="email" onChange={this.handleChange} value={this.state.user.email}/><br />
//             <label htmlFor="">Password</label>
//             <input type="password" name="password" onChange={this.handleChange} value={this.state.user.password}/><br />
//             <button>Login</button>
//         </form>
//       </div>
//     )
//   }
// }
