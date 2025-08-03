const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "dev@gmail.com",
        },
    },
};

const {title, author} = response.data;
console.log(`Title: ${title}`);
console.log(`AuthorName: ${author.name}`);
console.log(`AuthorEmail: ${author.email}`);

