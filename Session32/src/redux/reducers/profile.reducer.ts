import { PROFILE } from "../constants/type";

type ProfileState = {
  id: number;
  fullName: string;
  gender: string;
  dateOfBirth: string;
  address: string;
};

type ActionTypes = {
  type: string;
  payload: Partial<ProfileState>;
};

const showInfo: ProfileState = {
  id: 1,
  fullName: "Nguyễn Văn A",
  gender: "Nam",
  dateOfBirth: "12/12/2000",
  address: "Thanh Xuân, Hà Nội",
};

const profileReducer = (state: ProfileState = showInfo, action: ActionTypes) => {
  switch (action.type) {
    case PROFILE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default profileReducer;