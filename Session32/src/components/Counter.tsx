import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const result = useSelector((state:any) => state.counter);

  const dispatch = useDispatch();
  console.log("Result: ", result);

  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h2>Counter: {result}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}