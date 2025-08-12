let menuItemId = 1;
let tableId = 1;
let reservationId = 1;
let orderId = 1;
class MenuItem {
    constructor(name, price) {
        this.id = menuItemId++;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(capacity) {
        this.id = tableId++;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    constructor(customerName, tableId) {
        this.id = reservationId++;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(tableId, items) {
        this.id = orderId++;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(customerName, tableId) {
        const table = this.tables.find(t => t.id === tableId);
        if (!table) {
            console.log("Bàn không tồn tại.");
            return;
        }
        if (!table.available) {
            console.log("Bàn đã được đặt");
            return;
        }
        table.available = false;
        const reservation = new Reservation(customerName, tableId);
        this.reservations.push(reservation);
        console.log(`Đặt bàn thành công cho ${customerName}.`);
    }
    placeOrder(tableId, items) {
        const order = new Order(tableId, items);
        this.orders.push(order);
        console.log(`Đã đặt ${items.length} món cho bàn ${tableId}.`);
    }
    generateBill(tableId) {
        const tableOrders = this.orders.filter(order => order.tableId === tableId);
        const total = tableOrders.reduce((sum, order) => sum + order.getTotal(), 0);
        const table = this.tables.find(t => t.id === tableId);
        if (table) {
            table.available = true;
        }
        console.log(`Tổng hóa đơn cho bàn ${tableId}: ${total} VND`);
        return total;
    }
}
const restaurant = new Restaurant();
const ramen = new MenuItem("Ramen", 50000);
const bunBo = new MenuItem("Bún bò Huế", 40000);
restaurant.addMenuItem(ramen);
restaurant.addMenuItem(bunBo);
const table1 = new Table(4);
restaurant.addTable(table1);
restaurant.makeReservation("Minh", table1.id);
restaurant.placeOrder(table1.id, [ramen, bunBo]);
restaurant.generateBill(table1.id);
