import React,{useMemo} from 'react'
type User={
    id:number;
    name:string;
    age:number;
}
export default function User() {
    const users:User[]=[
        {id:1,name:"Tèo",age:3},
        {id:2,name:"Mèo",age:2},
        {id:3,name:"Chó",age:5},
        {id:4,name:"Gà",age:3},
    ]
    const user18=useMemo(()=>{
        return users.filter((user)=>user.age>18);
    },[users]);
  return (
    <div>
     <h2>Những người trên 18 tuổi</h2>
     {user18.map((item,index)=>(<li key={index}>Id:{item.id} Tên:{item.name} Tuổi: {item.age}</li>))}
    </div>
  )
}