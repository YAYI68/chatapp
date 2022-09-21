import React from 'react'

export const Message = () => {
  return (
    <div className='flex gap-[20px]'>
      <div className='flex flex-col text-gray-500 mb-[20px]'>
        <img className='w-[40px] object-cover h-[40px] rounded-full ' src="./images/avatar.png" alt="" />
        <span>Just now</span>
      </div>
      <div className=''>
        <p>hello</p>
        <img className='w-[50%]' src="./images/avatar.png" alt=""/>
      </div>
    </div>
  )
}
