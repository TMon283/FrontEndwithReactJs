import { REGISTER, LOGIN } from "../constants/type";

type User = {
  email: string;
  password: string;
  isLoggedIn?: boolean;
};

type ActionType = {
  type: string;
  payload?: Partial<User>;
};

const initialState: User = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: ActionType): User => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        email: action.payload?.email || "",
        password: action.payload?.password || "",
      };
    case LOGIN:
      return {
        ...state,
        email: action.payload?.email || state.email,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;