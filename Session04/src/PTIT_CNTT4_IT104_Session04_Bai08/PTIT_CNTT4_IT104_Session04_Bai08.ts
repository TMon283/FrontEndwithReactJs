interface ProductInfo {
  readonly id: string;
  name: string;
  price: number;
}

interface OrderItem {
  product: ProductInfo;
  quantity: number;
}

interface Order {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
}

let prod1: ProductInfo = {
  id: "PRD01",
  name: "Áo sơ mi",
  price: 500000
};

let prod2: ProductInfo = {
  id: "PRD02",
  name: "Áo phông",
  price: 100000
};

let prod3: ProductInfo = {
  id: "PRD03",
  name: "Quần tây",
  price: 300000
};

let orderItem01: OrderItem = {
  product: prod1,
  quantity: 2
};

let orderItem02: OrderItem = {
  product: prod2,
  quantity: 1
};

let orderItem03: OrderItem = {
  product: prod3,
  quantity: 2
};

let listOrderItem: OrderItem[] = [orderItem01, orderItem02, orderItem03];

let order001: Order = {
  orderId: "#ORD001",
  customerName: "Minh",
  items: listOrderItem,
  note: "Giao trước 17h"
};

function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}

function printOrder(order: Order): void {
  console.log(`Đơn hàng: ${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log("Sản phẩm:");
  order.items.forEach(item => {
    const totalPrice = item.product.price * item.quantity;
    console.log(`- ${item.product.name} × ${item.quantity} → ${totalPrice.toLocaleString()} VND`);
  });
  console.log(`Tổng cộng: ${calculateOrderTotal(order).toLocaleString()} VND`);
  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
}

printOrder(order001);
