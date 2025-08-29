import React, { useReducer, useState } from "react";

type State = {
  loading: boolean;
  success: boolean;
  error: string | null;
};

type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR"; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: null };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
}

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    success: false,
    error: null,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu" });
      }
    }, 1500);
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={state.loading}>
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {state.success && <p>Đăng nhập thành công!</p>}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}