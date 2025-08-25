import React, { Component } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  item: Product;
  onIncrease: (item: Product) => void;
  onDecrease: (item: Product) => void;
  onDelete: (id: number) => void;
};

export default class CartItem extends Component<Props> {
  render() {
    const { item, onIncrease, onDecrease, onDelete } = this.props;

    return (
      <div>
        <span>{item.name}</span>
        <button onClick={() => onIncrease(item)}>+</button>
        <span>{item.quantity}</span>
        <button onClick={() => onDecrease(item)}>-</button>
        <button onClick={() => onDelete(item.id)}>Xóa</button>
      </div>
    );
  }
}
