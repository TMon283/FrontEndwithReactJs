function createUser(name, age=18, role="User") {
    return {name, age, role};
}

console.log(createUser("Dev"));
console.log(createUser("Nguyen Van A", 20, "Admin"));


