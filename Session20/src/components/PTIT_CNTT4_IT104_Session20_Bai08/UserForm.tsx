import React, { useReducer } from 'react'

type InitialState = {
  name: string;
  email: string;
}

type Action = {
  type: 'UPDATE_FIELD';
  field: keyof InitialState;
  value: string;
}

const initialState: InitialState = {
  name: '',
  email: ''
}

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      }
    default:
      return state;
  }
}

export default function UserForm() {
  const [user, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name as keyof InitialState,
      value: e.target.value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Nhập tên"
          onChange={handleChange}
        /><br />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Nhập email"
          onChange={handleChange}
        /><br />
      </form>

      <span style={{ display: "block"}}>
        <h3>Thông tin người dùng:</h3>
        Tên: {user.name.length === 0 ? '(Chưa nhập)' : user.name} <br />
        Email: {user.email.length === 0 ? '(Chưa nhập)' : user.email}
      </span>
    </div>
  )
}
