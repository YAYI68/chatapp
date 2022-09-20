import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-white bg-gray-900 h-[50px] p-[10px] '>
      <span className='font-bold '>Let's Chat</span>
      <div className='flex gap-[10px]'>
        <img src="./images/avatar.png" alt=""  className='bg-white h-[24px] w-[24px] rounded-full object-cover'/>
        <span className='font-semibold'>Yayi</span>
        <button className='bg-gray-700 p-2 border-none text-white text-[10px] '>Logout</button>
      </div>
    </div>
  )
}
 