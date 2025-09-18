import { RANDOM } from "../constants/type";

type ActionTypes = {
  type: string;
  payload: number;
};

const randomReducer = (state = [], action: ActionTypes) => {
  switch (action.type) {
    case RANDOM:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default randomReducer;