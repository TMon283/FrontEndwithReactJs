let firstName: string = "thái";
let lastName: string = "minh";
firstName = firstName[0].toUpperCase() + firstName.slice(1);
lastName = lastName[0].toUpperCase() + lastName.slice(1);
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName);
