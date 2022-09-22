import React from 'react'
import { useStateContext } from '../contexts/AuthContextProvider'
import { Input } from './Input'
import { Messages } from './Messages'



export const Chat = () => {
   
  const { data } = useStateContext();

  return (
    <div className='grow-[2] flex flex-col'>
      <div className='p-2 h-[50px] text-white flex bg-gray-600 items-center justify-between'>
        <span>{data.user?.displayName}</span>
        <div className='flex gap-[10px]'>
           <img src='./images/camera.png' alt='' className='h-[24px] cursor-pointer' />
           <img src='./images/group.png' alt=''  className='h-[24px] cursor-pointer' />
           <img src='./images/more.png' alt=''  className='h-[24px] cursor-pointer'/>
        </div>
      </div>
      <Messages/>
      <Input />
    </div>
  )
}
