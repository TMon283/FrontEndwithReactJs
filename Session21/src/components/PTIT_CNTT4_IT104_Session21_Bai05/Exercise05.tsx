import React from 'react'

export default function Exercise05() {
  return (
    <div className='relative h-[200px] w-[300px] bg-blue-300 border-22 border-blue-200 rounded-[8px] mt-[50px]'>
        <p className='ml-3 pt-5 text-blue-800 text-[16px] font-semibold'>Relative parent</p>
      <div className='absolute bottom-[0px] h-[40px] w-[120px] bg-blue-400 text-center rounded-[8px] flex items-center justify-center text-white'>Absolute child</div>
    </div>
  )
}
