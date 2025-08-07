interface student {
    name: string,
    age: number,
    email: string
}

let person: student = {
    name: "Minh",
    age: 19,
    email: "lemonboy2k6@gmail.com"
}

console.log(`Tên tôi là ${person.name}, tôi ${person.age} và email của tôi là ${person.email}`);
