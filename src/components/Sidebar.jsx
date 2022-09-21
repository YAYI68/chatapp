import React from 'react'
import { Chats } from './Chats'
import { Navbar } from './Navbar'
import { Search } from './Search'



export const Sidebar = () => {
  return (
    <div className='grow-[1] bg-gray-800 flex flex-col'>
        <Navbar/>
        <Search />
        <Chats />
    </div>
  )
}
