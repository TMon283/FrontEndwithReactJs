import React, { Component } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  products: Product[];
  onAdd: (item: Product) => void;
};

export default class ProductList extends Component<Props> {
  render() {
    const { products, onAdd } = this.props;

    return (
      <div>
        {products.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price.toLocaleString()} VNĐ</p>
            <p>Còn lại: {item.quantity}</p>
            <button onClick={() => onAdd(item)}>Thêm vào giỏ hàng</button>
          </div>
        ))}
      </div>
    );
  }
}
