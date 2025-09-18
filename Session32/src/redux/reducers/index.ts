import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import randomReducer from "./random.reducer";
import profileReducer from "./profile.reducer";
import userReducer from "./user.reducer";
import companyReducer from "./company.reducer";
import themeReducer from "./theme.reducer";
import authReducer from "./auth.reducer";

const reducers = combineReducers({
  counter: counterReducer,
  random: randomReducer,
  profile: profileReducer,
  users: userReducer,
  company: companyReducer,
  theme: themeReducer,
  auth: authReducer,
});



export default reducers;