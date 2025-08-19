class Customer {
  private static nextId = 1;
  public readonly id: number;
  public name: string;
  public email: string;
  public shippingAddress: string;

  constructor(name: string, email: string, address: string) {
    this.id = Customer.nextId++;
    this.name = name;
    this.email = email;
    this.shippingAddress = address;
  }

  getDetails(): string {
    return `Khách hàng #${this.id}: ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
  }
}

abstract class Product {
  private static nextId = 1;
  public readonly id: number;
  public name: string;
  public price: number;
  public stock: number;

  constructor(name: string, price: number, stock: number) {
    this.id = Product.nextId++;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  sell(quantity: number): void {
    if (quantity <= this.stock) this.stock -= quantity;
  }

  restock(quantity: number): void {
    this.stock += quantity;
  }

  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
  public warrantyPeriod: number;

  constructor(name: string, price: number, stock: number, warrantyPeriod: number) {
    super(name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }

  getProductInfo(): string {
    return `${this.name} - Bảo hành: ${this.warrantyPeriod} tháng`;
  }

  getShippingCost(distance: number): number {
    return 50000;
  }

  getCategory(): string {
    return "Đồ điện tử";
  }
}

class ClothingProduct extends Product {
  public size: string;
  public color: string;

  constructor(name: string, price: number, stock: number, size: string, color: string) {
    super(name, price, stock);
    this.size = size;
    this.color = color;
  }

  getProductInfo(): string {
    return `${this.name} - Size: ${this.size}, Màu: ${this.color}`;
  }

  getShippingCost(distance: number): number {
    return 25000;
  }

  getCategory(): string {
    return "Quần áo";
  }
}

class Order {
  private static nextOrderId = 1;
  public readonly orderId: number;
  public customer: Customer;
  public products: { product: Product; quantity: number }[];
  public totalAmount: number;

  constructor(customer: Customer, products: { product: Product; quantity: number }[]) {
    this.orderId = Order.nextOrderId++;
    this.customer = customer;
    this.products = products;
    this.totalAmount = this.calculateTotal();
  }

  private calculateTotal(): number {
    return this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  getDetails(): string {
    let info = `Đơn hàng #${this.orderId} của ${this.customer.name}:\n`;
    this.products.forEach(item => {
      info += `- ${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity} VND\n`;
    });
    info += `Tổng cộng: ${this.totalAmount} VND`;
    return info;
  }
}

class Store {
  public products: Product[] = [];
  public customers: Customer[] = [];
  public orders: Order[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCustomer(name: string, email: string, address: string): void {
    this.customers.push(new Customer(name, email, address));
  }

  createOrder(customerId: number, productQuantities: { productId: number, quantity: number }[]): Order | null {
    const customer = this.customers.find(c => c.id === customerId);
    if (!customer) return null;

    const items: { product: Product; quantity: number }[] = [];

    for (const pq of productQuantities) {
      const product = this.products.find(p => p.id === pq.productId);
      if (!product || product.stock < pq.quantity) return null;
      product.sell(pq.quantity);
      items.push({ product, quantity: pq.quantity });
    }

    const order = new Order(customer, items);
    this.orders.push(order);
    return order;
  }

  cancelOrder(orderId: number): void {
    const index = this.orders.findIndex(o => o.orderId === orderId);
    if (index !== -1) {
      const order = this.orders[index];
      order.products.forEach(item => item.product.restock(item.quantity));
      this.orders.splice(index, 1);
    }
  }

  listAvailableProducts(): void {
    this.products.filter(p => p.stock > 0).forEach(p => {
      console.log(`${p.name} - ${p.stock} cái`);
    });
  }

  listCustomerOrders(customerId: number): void {
    this.orders.filter(o => o.customer.id === customerId).forEach(o => {
      console.log(o.getDetails());
    });
  }

  calculateTotalRevenue(): number {
    return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
  }

  countProductsByCategory(): void {
    const counts = this.products.reduce((acc, p) => {
      const cat = p.getCategory();
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log(counts);
  }

  updateProductStock(productId: number, newStock: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) this.products[index].stock = newStock;
  }

  findById<T extends Customer | Product>(list: T[], id: number): T | undefined {
    return list.find(item => item.id === id);
  }

  showProductDetails(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) console.log(product.getProductInfo());
  }
}

const store = new Store();

store.addCustomer("Hoàng", "hoang@example.com", "Hà Nội");
store.addCustomer("Minh", "minh@example.com", "Đà Nẵng");

store.addProduct(new ElectronicsProduct("Laptop Lenovo", 20000000, 10, 24));
store.addProduct(new ClothingProduct("Áo thun", 250000, 50, "L", "Đen"));
store.addProduct(new ClothingProduct("Quần jeans", 400000, 30, "M", "Xanh"));

const order1 = store.createOrder(1, [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 2 },
]);

if (order1) console.log(order1.getDetails());

store.cancelOrder(1);

console.log("\nSản phẩm còn hàng:");
store.listAvailableProducts();

console.log("\nĐơn hàng của khách hàng:");
store.listCustomerOrders(1);

console.log("\nTổng doanh thu:");
console.log(store.calculateTotalRevenue() + " VND");

console.log("\nThống kê sản phẩm:");
store.countProductsByCategory();

store.updateProductStock(2, 100);
console.log("\nĐã cập nhật tồn kho sản phẩm #2");

console.log("\nTìm khách hàng:");
const foundCustomer = store.findById(store.customers, 1);
console.log(foundCustomer?.getDetails());

console.log("\nTìm sản phẩm:");
const foundProduct = store.findById(store.products, 2);
console.log(foundProduct?.getProductInfo());

console.log("\nChi tiết sản phẩm:");
store.showProductDetails(3);
