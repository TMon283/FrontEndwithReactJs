import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../interface/interface";

export default function Cart() {
  const result = useSelector((data: any) => {
    return data.cart.cart;
  });
  const dispatch= useDispatch();
  const increase=(item:Product)=>{
      dispatch({
      type:"INCREMENT",
      payload:item
      }
      )
  }
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
                      <th scope="row">{index+1}</th>
                      <td>{item.title}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <button>-</button>
                        {item.quantity}
                        <button onClick={()=>increase(item)}>+</button>
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product=""
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
                    There are <b>{result.length}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {result.reduce((acc:any,item:any)=>{
                      return  acc+ item.price*item.quantity
                    },0)} USD
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div className="alert alert-success" role="alert" id="motification">
          Add to cart successfully
        </div>
      </div>
    </div>
  );
}