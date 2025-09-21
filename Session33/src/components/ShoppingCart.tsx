import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../interface/interface";
import ConfirmModal from "./ConfirmModal";

export default function ShoppingCart() {
  const result = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const increase = (item: Product) => {
    dispatch({
      type: "INCREMENT",
      payload: item,
    });
  };

  const decrease = (item: Product) => {
    if (item.quantity && item.quantity > 1) {
      dispatch({
        type: "DECREMENT",
        payload: item,
      });
    } else {
      dispatch({
        type: "REMOVE",
        payload: item,
      });
    }
  };

  const remove = (item: Product) => {
    setProductToDelete(item);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      dispatch({
        type: "REMOVE",
        payload: productToDelete,
      });
    }
    setShowModal(false);
    setProductToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setProductToDelete(null);
  };

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {result.map((item: Product, index: number) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <button onClick={() => decrease(item)}>-</button>
                        {item.quantity}
                        <button onClick={() => increase(item)}>+</button>
                      </td>
                      <td>
                        {" "}
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          {" "}
                          Update{" "}
                        </a>{" "}
                        <a
                          className="label label-danger delete-cart-item"
                          onClick={() => remove(item)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot id="my-cart-footer">
                <tr>
                  <td colSpan={4}>
                    There are <b>{result.length}</b> items in your shopping
                    cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {result.reduce(
                      (acc: number, item: any) =>
                        acc + item.price * item.quantity,
                      0
                    )}{" "}
                    USD
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="alert alert-success" role="alert" id="mnotification">
          Add to cart successfully
        </div>
      </div>
      
      <ConfirmModal
        isOpen={showModal}
        product={productToDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
}
