import React, { Component } from 'react';

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default class ConfirmModal extends Component<Props> {
  render() {
    const { onConfirm, onCancel } = this.props;

    return (
      <div>
        <p>Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?</p>
        <button onClick={onConfirm}>Xác nhận</button>
        <button onClick={onCancel}>Hủy</button>
      </div>
    );
  }
}
