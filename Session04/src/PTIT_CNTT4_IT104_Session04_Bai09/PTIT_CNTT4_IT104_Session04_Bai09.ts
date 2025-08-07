interface Product {
  readonly id: string;
  name: string;
  price: number;
}

interface OrderItem {
  product: Product;
  quantity: number;
  note?: string;
}

interface Order {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  deliveryAddress: string;
  isPaid: boolean;
}

interface Invoice {
  invoiceId: string;
  orders: Order[];
  createdAt: Date;
}

function calculateInvoiceTotal(invoice: Invoice): number {
  return invoice.orders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    return total + orderTotal;
  }, 0);
}

function getUnpaidOrders(invoice: Invoice): Order[] {
  return invoice.orders.filter(order => !order.isPaid);
}

function printInvoice(invoice: Invoice): void {
  console.log(`HÓA ĐƠN: ${invoice.invoiceId}`);
  console.log(`Ngày tạo: ${invoice.createdAt.toLocaleDateString()}`);
  invoice.orders.forEach(order => {
    console.log(`\nĐơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Địa chỉ giao hàng: ${order.deliveryAddress}`);
    console.log(`Trạng thái: ${order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}`);
    console.log("Sản phẩm:");
    order.items.forEach(item => {
      const itemTotal = item.product.price * item.quantity;
      console.log(`- ${item.product.name} × ${item.quantity} → ${itemTotal.toLocaleString()} VND`);
      if (item.note) {
        console.log(`  Ghi chú: ${item.note}`);
      }
    });
  });

  const total = calculateInvoiceTotal(invoice);
  console.log(`\nTổng tiền hóa đơn: ${total.toLocaleString()} VND`);
}

const prodA: Product = { id: "P01", name: "Áo sơ mi", price: 250000 };
const prodB: Product = { id: "P02", name: "Quần jeans", price: 400000 };

const order1: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Doanh Tuấn",
  deliveryAddress: "Quang Trung, Hà Đông",
  isPaid: false,
  items: [
    { product: prodA, quantity: 2, note: "Size M" },
    { product: prodB, quantity: 1 }
  ]
};

const order2: Order = {
  orderId: "ORD002",
  customerName: "Hoàng Thái Minh",
  deliveryAddress: "Đại Mỗ, Nam Từ Liêm, Hà Nội",
  isPaid: true,
  items: [
    { product: prodB, quantity: 2, note: "Màu đen" }
  ]
};

const invoice: Invoice = {
  invoiceId: "INV001",
  orders: [order1, order2],
  createdAt: new Date()
};

printInvoice(invoice);
