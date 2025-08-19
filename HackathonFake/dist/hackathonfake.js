class Customer {
    constructor(name, email, address) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = address;
    }
    getDetails() {
        return `Khách hàng #${this.id}: ${this.name}, Email: ${this.email}, Địa chỉ: ${this.shippingAddress}`;
    }
}
Customer.nextId = 1;
class Product {
    constructor(name, price, stock) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (quantity <= this.stock)
            this.stock -= quantity;
    }
    restock(quantity) {
        this.stock += quantity;
    }
}
Product.nextId = 1;
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `${this.name} - Bảo hành: ${this.warrantyPeriod} tháng`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        return "Đồ điện tử";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `${this.name} - Size: ${this.size}, Màu: ${this.color}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        return "Quần áo";
    }
}
class Order {
    constructor(customer, products) {
        this.orderId = Order.nextOrderId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = this.calculateTotal();
    }
    calculateTotal() {
        return this.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
    getDetails() {
        let info = `Đơn hàng #${this.orderId} của ${this.customer.name}:\n`;
        this.products.forEach(item => {
            info += `- ${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity} VND\n`;
        });
        info += `Tổng cộng: ${this.totalAmount} VND`;
        return info;
    }
}
Order.nextOrderId = 1;
class Store {
    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(name, email, address) {
        this.customers.push(new Customer(name, email, address));
    }
    createOrder(customerId, productQuantities) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer)
            return null;
        const items = [];
        for (const pq of productQuantities) {
            const product = this.products.find(p => p.id === pq.productId);
            if (!product || product.stock < pq.quantity)
                return null;
            product.sell(pq.quantity);
            items.push({ product, quantity: pq.quantity });
        }
        const order = new Order(customer, items);
        this.orders.push(order);
        return order;
    }
    cancelOrder(orderId) {
        const index = this.orders.findIndex(o => o.orderId === orderId);
        if (index !== -1) {
            const order = this.orders[index];
            order.products.forEach(item => item.product.restock(item.quantity));
            this.orders.splice(index, 1);
        }
    }
    listAvailableProducts() {
        this.products.filter(p => p.stock > 0).forEach(p => {
            console.log(`${p.name} - ${p.stock} cái`);
        });
    }
    listCustomerOrders(customerId) {
        this.orders.filter(o => o.customer.id === customerId).forEach(o => {
            console.log(o.getDetails());
        });
    }
    calculateTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    countProductsByCategory() {
        const counts = this.products.reduce((acc, p) => {
            const cat = p.getCategory();
            acc[cat] = (acc[cat] || 0) + 1;
            return acc;
        }, {});
        console.log(counts);
    }
    updateProductStock(productId, newStock) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1)
            this.products[index].stock = newStock;
    }
    findById(list, id) {
        return list.find(item => item.id === id);
    }
    showProductDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product)
            console.log(product.getProductInfo());
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
if (order1)
    console.log(order1.getDetails());
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
console.log(foundCustomer === null || foundCustomer === void 0 ? void 0 : foundCustomer.getDetails());
console.log("\nTìm sản phẩm:");
const foundProduct = store.findById(store.products, 2);
console.log(foundProduct === null || foundProduct === void 0 ? void 0 : foundProduct.getProductInfo());
console.log("\nChi tiết sản phẩm:");
store.showProductDetails(3);
