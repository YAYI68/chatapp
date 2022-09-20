import React from 'react'
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {
  return (
    <div className='bg-blue-200 h-[100vh] flex items-center justify-center'>
        <div className='border-1 flex w-[65%] h-[80%]'>
          <Sidebar/>
          <Chat/>  
        </div>
    </div>
  )
}
