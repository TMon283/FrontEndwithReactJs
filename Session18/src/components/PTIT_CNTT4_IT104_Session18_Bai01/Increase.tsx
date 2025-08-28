import React, { useReducer } from 'react';

export default function Counter() {
  const initialState = {
    count: 0,
  };

  const counterReducer = (state: typeof initialState, action: { type: string; payload?: number }) => {
    switch (action.type) {
      case "INCREASE":
        return { count: state.count + (action.payload || 1) };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE", payload: 1 });
  };

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}