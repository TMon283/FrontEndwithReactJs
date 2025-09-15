import { useNavigate, useParams } from "react-router-dom";
import { list } from "./ProductList";

export default function ProductDetail() {
  const { id } = useParams();
  const navi = useNavigate();
  const handleClick = () => {
    navi("/products");
  };

  const data = list.findIndex(e =>e.id === Number(id));
  return (
    <div>
      <p>Id :{list[data].id} </p>
      <p>Ten : {list[data].name}</p>
      <p>Gia : {list[data].price}</p>
      <p>Mo ta : {list[data].description}</p>
      <button onClick={handleClick}>Quay tro lai</button>
    </div>
  );
}