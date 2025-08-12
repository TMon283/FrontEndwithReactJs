class _Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log("Đăng nhập");
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class _UserAcc extends _Account {
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
class _AdminAcc extends _Account {
    constructor(id, userName, password) {
        super(id, userName, password, "admin");
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị ban`);
    }
}
const user01 = new _UserAcc(1, "hoang", "123", "user", "active");
user01.login();
const admin = new _AdminAcc(99, "admin", "adminpass");
admin.banUser(user01);
user01.login();
