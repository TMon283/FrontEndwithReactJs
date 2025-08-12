class Account {
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
    console.log("Login method in base class");
  }

  logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    }
  }
}

class UserAcc extends Account {
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

const user1 = new UserAcc(1, "hoang", "123", "user", "active");
user1.login();   
user1.logout();  

const user2 = new UserAcc(2, "minh", "abc", "user", "banned");
user2.login();   
user2.logout(); 
