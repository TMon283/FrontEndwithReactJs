const users =[
    {
        name: "John",
        age: 25,
        location: {
            city:"Hanoi",
            country:"Vietnam"
        },
        contact: {
            email:"john@gmail.com",
            phone:"0123456789"
        },
        job: {
            title:"Developer",
            company:"Tech Corp"
        }
    }
]

function displayUserInfo({name, age, location = {}, contact = {}, job = {}}) {
    const city = location.city || "unknown";
    const country = location.country || "unknown";
    const jobTitle = job.title || "unknown";
    const jobCompany = job.company || "unknown";
    const email = contact.email || "unknown";
    const phone = contact.phone || "unknown";
    return `${name} is ${age} years old, live in ${city}, ${country}, work as ${jobTitle} at ${jobCompany}, and can be contacted via ${email} or ${phone}`
}

console.log(displayUserInfo({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } }));
console.log(displayUserInfo({ name: "John", age: 25, location: { city: "Hanoi", country: "Vietnam" }, contact: { email: "john@example.com", phone: "0123456789" }, job: { title: "Developer", company: "Tech Corp" } }));
