import { useDispatch, useSelector } from "react-redux";
import { COMPANY } from "../redux/constants/type";

export default function ChangeState() {
  const company = useSelector((state:any) => state.company.company);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch({
      type: COMPANY,
      payload: "RikkeiSoft",
    });
  };

  return (
    <div>
      <h2>Company: {company}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}