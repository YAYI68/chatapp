
import React from 'react'
import { signOut } from 'firebase/auth' 
import { auth } from '../firebaseConfig'
import { useStateContext } from '../contexts/AuthContextProvider'

export const Navbar = () => {
     const { currentUser }= useStateContext();
  return (
    <div className='flex items-center justify-between text-white bg-gray-900 h-[50px] p-[10px] '>
      <span className='font-bold '>Let's Chat</span>
      <div className='flex gap-[10px]'>
        <img src={currentUser.photoURL} alt=""  className='bg-white h-[24px] w-[24px] rounded-full object-cover'/>
        <span className='font-semibold'>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)} className='bg-gray-700 p-2 border-none text-white text-[10px] '>Logout</button>
      </div>
    </div>
  )
}
 