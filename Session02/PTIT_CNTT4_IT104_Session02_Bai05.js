let phoneBooks = [];


const addContact = (name, phoneNumber, email) => {
    const contact = {name, phoneNumber, email}
    phoneBooks.push(contact)
}
const display = () => {
    phoneBooks.forEach(({ name, phoneNumber, email }) => {
        console.log(`
            Tên:${name}
            Số điện thoại:${phoneNumber}
            Email:${email}
            `);
  });
}

addContact("Hoàng Thái Minh", "0332375399", "lemonboy2k6@gmail.com");
addContact("Nguyễn Doanh Tuấn", "0123456789", "dtug06@gmail.com");
display()