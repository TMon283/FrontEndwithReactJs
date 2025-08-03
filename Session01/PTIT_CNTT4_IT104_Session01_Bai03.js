const data = [
    {id: "001", name: "Minh"},
    {id: "002", name:"Tuan"}
]

const student ={
    id:"",
    name:""
}

data.forEach(item=>{
    console.log(`Xin chào ${item.name}. Mã SV:${item.id}`);
})