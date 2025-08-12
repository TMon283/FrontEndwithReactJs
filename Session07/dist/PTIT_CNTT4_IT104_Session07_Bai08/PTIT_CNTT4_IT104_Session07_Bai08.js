class _BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp: +${amount} => Số dư: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
        }
        else {
            this.history.push(`Rút thất bại: -${amount} => Số dư: ${this.balance}`);
        }
    }
    showHistory() {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((entry) => console.log(entry));
    }
}
class CheckingAccount extends _BankAccount {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
        }
        else {
            this.history.push(`Rút thất bại: -${amount} => Số dư: ${this.balance}`);
        }
    }
}
const account = new CheckingAccount("AC456", 1000, 500);
account.deposit(200);
account.withdraw(1100);
account.withdraw(700);
account.showHistory();
