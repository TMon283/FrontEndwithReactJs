import { COMPANY } from "../constants/type";

const firstName = {
  company: "Rikkei Academy",
};

type ActionTypes = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

const companyReducer = (state = firstName, action: ActionTypes) => {
  switch (action.type) {
    case COMPANY:
      return {
        ...state,
        company: action.payload,
      };

    default:
      return state;
  }
};

export default companyReducer;