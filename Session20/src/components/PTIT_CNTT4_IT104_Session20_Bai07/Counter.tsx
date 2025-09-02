import React, { useReducer } from 'react';

export default function Counter() {
  const initialState = {
    count: 0,
  };

  const counterReducer = (state: typeof initialState, action: { type: string; payload?: number }) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + (action.payload || 1) };
       case "DECREASE":
        return { count: state.count - (action.payload || 1) }; 
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE", payload: 1 });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE", payload: 1 });
  };

  return (
    <div>
      <h3>Số đếm: {state.count}</h3>
      <button onClick={handleIncrease}>Tăng</button>
      <button onClick={handleDecrease}>Giảm</button>
    </div>
  );
}