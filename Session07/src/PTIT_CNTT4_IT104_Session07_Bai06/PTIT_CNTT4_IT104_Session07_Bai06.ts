class _Account {
  public id: number;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: number, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.isLogin = false;
    this.role = role;
  }

  login(): void {
    console.log("Đăng nhập");
  }

  logout(): void {
    if (this.isLogin) {
      this.isLogin = false;
      console.log("Đăng xuất thành công");
    }
  }
}

class _UserAcc extends _Account {
  public status: "active" | "banned";

  constructor(
    id: number,
    userName: string,
    password: string,
    role: string,
    status: "active" | "banned"
  ) {
    super(id, userName, password, role);
    this.status = status;
  }

  override login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else {
      console.log("Tài khoản đã bị khóa");
    }
  }
}

class _AdminAcc extends _Account {
  constructor(id: number, userName: string, password: string) {
    super(id, userName, password, "admin");
  }

  banUser(user: _UserAcc): void {
    user.status = "banned";
    console.log(`Người dùng ${user.userName} đã bị ban`);
  }
}

const user01 = new _UserAcc(1, "hoang", "123", "user", "active");
user01.login();

const admin = new _AdminAcc(99, "admin", "adminpass");
admin.banUser(user01);

user01.login(); 
