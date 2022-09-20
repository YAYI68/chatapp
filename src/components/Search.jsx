import React from 'react'

export const Search = () => {
  return (
    <div className='border-b-2 border-b-gray-200'>
      <div className='p-[10px]'>
        <input type="search" placeholder='Find a user' className='placeholder:text-gray-200 outline-none bg-transparent  text-white' />
      </div>
      <div>
        <img  src='./images/avatar.png' alt='' className='w-[50px] h-[50px]' />
        <div>
           <span>Yayi</span>
        </div>
      </div>
    </div>
  )
}
