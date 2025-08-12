class BankAccount {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: "active" | "inactive";

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.history = [];
    this.status = "active";
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Nạp: +${amount} => Số dư: ${this.balance}`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
    } else {
      this.history.push(`Rút thất bại: -${amount} => Số dư: ${this.balance}`);
    }
  }

  showHistory(): void {
    console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
    this.history.forEach((entry) => console.log(entry));
  }
}

class SavingAccount extends BankAccount {
  public interestRate: number;

  constructor(accountNumber: string, initialBalance: number, interestRate: number) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  override withdraw(amount: number): void {
    if (amount > 0 && this.balance - amount >= 0) {
      this.balance -= amount;
      this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
    } else {
      this.history.push(`Rút thất bại: -${amount} => Số dư: ${this.balance}`);
    }
  }
}

const acc = new SavingAccount("USER001", 1000, 0.05);
acc.deposit(500);
acc.withdraw(300);
acc.withdraw(1500);
acc.showHistory();
