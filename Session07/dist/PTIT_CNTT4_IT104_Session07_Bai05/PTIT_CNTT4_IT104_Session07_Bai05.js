class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log("Login method in base class");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class UserAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const user1 = new UserAcc(1, "hoang", "123", "user", "active");
user1.login();
user1.logout();
const user2 = new UserAcc(2, "minh", "abc", "user", "banned");
user2.login();
user2.logout();
