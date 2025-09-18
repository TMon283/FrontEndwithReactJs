import { DECREASE, INCREASE, RESET } from "../constants/type";

type ActionTypes = {
  type: string;
};

const counterReducer = (state = 0, action: ActionTypes) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

export default counterReducer;