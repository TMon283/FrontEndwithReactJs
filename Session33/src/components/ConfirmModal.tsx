import React from "react";
import type { Product } from "../interface/interface";

interface ConfirmModalProps {
  isOpen: boolean;
  product: Product | null;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ 
  isOpen, 
  product, 
  onConfirm, 
  onCancel 
}: ConfirmModalProps) {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <p>Bạn có chắc chắn muốn xóa sản phẩm "{product.title}"?</p>
        <div>
          <button onClick={onCancel}>Hủy</button>
          <button onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
