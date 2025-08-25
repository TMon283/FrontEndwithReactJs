import React, { Component } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import ConfirmModal from './ConfirmModal';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type State = {
  products: Product[];
  carts: Product[];
  showModal: boolean;
  deleteId: number | null;
};

export default class App extends Component<object, State> {
  state: State = {
    products: [
        { id: 1, name: 'Điện thoại Samsung Galaxy', price: 20000000, quantity: 6 },
        { id: 2, name: 'Điện thoại Iphone11 Promax', price: 20500000, quantity: 7 },
        { id: 3, name: 'Điện thoại Iphone12 Pro', price: 21000000, quantity: 8 },
        { id: 4, name: 'Điện thoại Iphone13 Promax', price: 23000000, quantity: 9 },
        { id: 5, name: 'Điện thoại Iphone16 Pro', price: 27000000, quantity: 10 },
        { id: 6, name: 'Điện thoại Iphone16 Promax', price: 28000000, quantity: 11 },
    ],
    carts: [],
    showModal: false,
    deleteId: null,
  };

  handleAddToCart = (product: Product) => {
    const exist = this.state.carts.find((item) => item.id === product.id);
    if (exist) {
      this.handleIncrease(product);
    } else {
      this.setState({ carts: [...this.state.carts, { ...product, quantity: 1 }] });
    }
  };

  handleIncrease = (product: Product) => {
    const updated = this.state.carts.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    this.setState({ carts: updated });
  };

  handleDecrease = (product: Product) => {
    const updated = this.state.carts
      .map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    this.setState({ carts: updated });
  };

  handleDelete = (id: number) => {
    this.setState({ showModal: true, deleteId: id });
  };

  confirmDelete = () => {
    this.setState({
      carts: this.state.carts.filter((item) => item.id !== this.state.deleteId),
      showModal: false,
      deleteId: null,
    });
  };

  cancelDelete = () => {
    this.setState({ showModal: false, deleteId: null });
  };

  render() {
    return (
      <div>
        <h1>Quản lý giỏ hàng</h1>
        <ProductList products={this.state.products} onAdd={this.handleAddToCart} />
        <Cart
          carts={this.state.carts}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete}
        />
        {this.state.showModal && (
          <ConfirmModal onConfirm={this.confirmDelete} onCancel={this.cancelDelete} />
        )}
      </div>
    );
  }
}
