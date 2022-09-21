import React from 'react'

export const Chat = () => {
  return (
    <div className='grow-[2]'>
      <div className='p-2 h-[50px] text-white flex bg-gray-600 items-center justify-between'>
        <span>Yayi</span>
        <div className='flex gap-[10px]'>
           <img src='./images/camera.png' alt='' className='h-[24px] cursor-pointer' />
           <img src='./images/group.png' alt=''  className='h-[24px] cursor-pointer' />
           <img src='./images/more.png' alt=''  className='h-[24px] cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}
