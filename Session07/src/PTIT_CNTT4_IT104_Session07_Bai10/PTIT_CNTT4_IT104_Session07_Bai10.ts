let menuItemId = 1;
let tableId = 1;
let reservationId = 1;
let orderId = 1;

class MenuItem {
  public id: number;
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.id = menuItemId++;
    this.name = name;
    this.price = price;
  }
}

class Table {
  public id: number;
  public capacity: number;
  public available: boolean;

  constructor(capacity: number) {
    this.id = tableId++;
    this.capacity = capacity;
    this.available = true;
  }
}

class Reservation {
  public id: number;
  public customerName: string;
  public tableId: number;

  constructor(customerName: string, tableId: number) {
    this.id = reservationId++;
    this.customerName = customerName;
    this.tableId = tableId;
  }
}

class Order {
  public id: number;
  public tableId: number;
  public items: MenuItem[];

  constructor(tableId: number, items: MenuItem[]) {
    this.id = orderId++;
    this.tableId = tableId;
    this.items = items;
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

class Restaurant {
  public menu: MenuItem[] = [];
  public tables: Table[] = [];
  public reservations: Reservation[] = [];
  public orders: Order[] = [];

  addMenuItem(item: MenuItem) {
    this.menu.push(item);
  }

  addTable(table: Table) {
    this.tables.push(table);
  }

  makeReservation(customerName: string, tableId: number) {
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

  placeOrder(tableId: number, items: MenuItem[]) {
    const order = new Order(tableId, items);
    this.orders.push(order);
    console.log(`Đã đặt ${items.length} món cho bàn ${tableId}.`);
  }

  generateBill(tableId: number): number {
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
