import React from 'react'

export default function Exercise8() {
    const user =[
        {
            id:1,
            name:"A",
            birt:"12/12/2000",
            sex:"nam",
            address:"Viet Nam",
        },
        {
            id:2,
            name:"B",
            birt:"22/01/1999",
            sex:"nam",
            address:"Nhat Ban",
        }
    ]
  return (
    <table style={{
        width:"100%",
        borderCollapse: "collapse"
    }}>
        <thead>
            <tr style={{ border: "1px solid grey" , backgroundColor:"gray"}} >
                <th>STT</th>
                <th colSpan={3} >Họ và tên</th>
                <th colSpan={2}>Ngày sinh</th>
                <th>Giới tính</th>
                <th colSpan={2}>Địa chỉ</th>
                <th colSpan={4}>Hành động</th>
        </tr>
        </thead>
        <tbody>
            {
            user.map((item,index)=>{
                return (
                    <tr key={index} style={{textAlign:"center",border: "1px solid gray"}}>
                    <td>{item.id}</td>
                    <td colSpan={3}>{item.name}</td>
                    <td colSpan={2}>{item.birt}</td>
                    <td>{item.sex}</td>
                    <td colSpan={2}>{item.address}</td>
                    <td colSpan={4} style={{display:"flex",justifyContent:"space-evenly"}}>
                        <button style={{border:"none" , borderRadius:"5px" , width:"50px" , height:"30px"}} >Sua</button>
                        <button style={{backgroundColor:"red" , color:"white", border:"none" , borderRadius:"5px" , width:"50px" , height:"30px"}}>Xoa</button>
                    </td>
                </tr>
                )
            })
        }
        </tbody>
    </table>
  )
}