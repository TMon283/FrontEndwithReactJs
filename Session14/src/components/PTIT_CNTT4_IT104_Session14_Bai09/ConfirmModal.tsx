import React, { Component } from 'react';

type Props = {
  task: string | null;
  onCancel: () => void;
  onConfirm: () => void;
};

export default class ConfirmModal extends Component<Props> {
  render() {
    return (
      <div className="modal">
        <p>Bạn có chắc muốn xóa công việc "{this.props.task}"?</p>
        <button onClick={this.props.onCancel}>Hủy</button>
        <button onClick={this.props.onConfirm}>Đồng ý</button>
      </div>
    );
  }
}
