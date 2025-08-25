import React, { Component } from 'react';
import CartItem from './CartItem';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  carts: Product[];
  onIncrease: (item: Product) => void;
  onDecrease: (item: Product) => void;
  onDelete: (id: number) => void;
};

export default class Cart extends Component<Props> {
  getTotal = (): number => {
    return this.props.carts.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  render() {
    const { carts, onIncrease, onDecrease, onDelete } = this.props;

    return (
      <div>
        <h2>Giỏ hàng</h2>
        {carts.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onDelete={onDelete}
          />
        ))}
        <h3>Tổng tiền: {this.getTotal().toLocaleString()} VND</h3>
      </div>
    );
  }
}
