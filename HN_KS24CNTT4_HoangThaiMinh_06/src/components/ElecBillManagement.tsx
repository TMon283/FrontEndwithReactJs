import React from 'react'
import { Button } from "antd"
import {Zap} from "lucide-react"
import { Pagination } from 'antd';

export default function ElectronBillManagement() {
  return (
    <div className='h-[100vh] w-[1200px] bg-gray-200 flex-row justify-center justify-self-center'>
        <header className='h-[100px] w-[1000px] bg-orange-400 justify-self-center rounded-sm'>
            <h1 className='flex justify-self-center font-semibold text-white text-2xl pt-[25px]'><span className='mt-[5px] mr-[3px]'><Zap /></span> Quản Lý Hóa Đơn Tiền Điện</h1>
        </header>
        <div className='justify-self-center mt-8 h-[140px] w-[1000px] bg-white p-4 rounded-sm'>
            <h2 className='font-bold'>+ Thêm hóa đơn mới</h2>
            <div className='self-center mt-6'>
                <form action="">
                    <input type="text" placeholder='Tên chủ hộ' className='border border-gray-300 h-[30px] p-2 rounded-sm mr-5'/>
                    <input type="text" placeholder='Số tiền' className='border border-gray-300 h-[30px] p-2 rounded-sm mr-5'/>
                    <select name="" id="" className='border border-gray-300 h-[30px] w-[180px] rounded-sm mr-5'>
                        <option value="0">Chưa thanh toán</option>
                        <option value="1">Đã thanh toán</option>
                    </select>
                    <Button type="primary">Thêm</Button>
                </form>
            </div>
        </div>
        <div className='justify-self-center mt-8 h-[400px] w-[1000px] bg-white p-4 rounded-sm'>
            <h2 className='font-bold mb-5'>Danh sách hóa đơn</h2>
            <table className='border-collapse border border-gray-200 w-[940px] h-[200px] text-left'>
                <thead className='bg-gray-100'>
                    <tr className='h-[40px]'>
                        <th className='border border-gray-200 w-[25%] p-3'>Tên chủ hộ</th>
                        <th className='border border-gray-200 w-[25%] p-3'>Số tiền (VNĐ)</th>
                        <th className='border border-gray-200 w-[25%] p-3'>Trạng thái</th>
                        <th className='border border-gray-200 w-[25%] p-3'>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-gray-200 text-blue-400 p-3'>Trần Văn Hùng</td>
                        <td className='border border-gray-200 p-3'>550.000</td>
                        <td className='w-[100px] h-[30px] border border-gray-200 p-3'><span className='bg-blue-100 p-[2px] border border-blue-400 text-blue-400 rounded-sm'>Đã thanh toán</span></td>
                        <td className='border border-gray-200 p-3'>
                            <Button color="primary" variant="outlined" className='mr-3'>Sửa</Button>
                            <Button color="danger" variant="outlined">Xóa</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-gray-200 text-blue-400 p-3'>Lê Thị Mai</td>
                        <td className='border border-gray-200 p-3'>780.000</td>
                        <td className='w-[100px] h-[30px] border border-gray-200 p-3'><span className='bg-yellow-100 p-[2px] border border-yellow-400 text-yellow-400 rounded-sm'>Chưa thanh toán</span></td>
                        <td className='border border-gray-200 p-3'> 
                            <Button color="primary" variant="outlined" className='mr-3'>Sửa</Button>
                            <Button color="danger" variant="outlined">Xóa</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className='border border-gray-200 text-blue-400 p-3'>Phạm Minh Đức</td>
                        <td className='border border-gray-200 p-3'>420.000</td>
                        <td className='w-[100px] h-[30px] border border-gray-200 p-3'><span className='bg-blue-100 p-[2px] border border-blue-400 text-blue-400 rounded-sm'>Đã thanh toán</span></td>
                        <td className='border border-gray-200 p-3'>
                            <Button color="primary" variant="outlined" className='mr-3'>Sửa</Button>
                            <Button color="danger" variant="outlined">Xóa</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
                <div className='justify-items-end mr-7 mt-10'>
                    <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>
    </div>
  )
}

