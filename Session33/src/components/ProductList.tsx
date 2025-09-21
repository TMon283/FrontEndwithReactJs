import { useState } from "react";
import { useDispatch } from "react-redux";
import pizza from "../images/pizza.jpg";
import bread from "../images/bread.jpg";
import hamburger from "../images/Hamburger.jpg";
import cake from "../images/Cake.jpg";
import type { Product } from "../interface/interface";

const data: Product[] = [
  { id: 1, title: "Pizza", image: pizza, content: "pizza", price: 30 },
  { id: 2, title: "Hamburger", image: hamburger, content: "Hamburger", price: 15 },
  { id: 3, title: "Bread", image: bread, content: "Bread", price: 20 },
  { id: 4, title: "Cake", image: cake, content: "Cake", price: 10 },
];

export default function ProductList() {
  const [products] = useState<Product[]>(data);
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    console.log("Adding to cart:", product);
    dispatch({
      type: "ADD_TO_CART", 
      payload: { ...product, quantity: 1 }, 
    });
  };

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {products.map((item: Product) => {
              return (
                <div key={item.id}>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src={item.image}
                          alt={item.title}
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.title}</h4>
                      <p>{item.content}</p>
                      <input
                        name={`quantity-product-${item.id}`}
                        type="number"
                        defaultValue={1}
                        min={1}
                      />
                      <a
                        onClick={() => addToCart(item)}
                        className="price"
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                      >
                        {item.price} USD
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
