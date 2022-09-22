import { onSnapshot, doc, } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/AuthContextProvider';
import { db } from '../firebaseConfig';


export const Chats = () => {
  
  const [ chats, setChats] = useState();
  const { currentUser } = useStateContext();
  useEffect(() => {
    
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
     setChats(doc.data())
  });
  
    return () => {
      unsub()
    }
  }, [currentUser.uid])
  
console.log(chats)
  return (
    <div>
      <div className='hover:bg-gray-900 flex items-center text-white p-[10px] cursor-pointer'>
        <img  src='./images/avatar.png' alt='' className='w-[50px] h-[50px]' />
        <div>
           <span className='text-[18px] font-semibold'>Yayi</span>
           <p className='text-[14px] text-gray-200'>helo</p>
        </div>
      </div> 
      <div className='hover:bg-gray-900 flex items-center text-white p-[10px] cursor-pointer'>
        <img  src='./images/avatar.png' alt='' className='w-[50px] h-[50px]' />
        <div>
           <span className='text-[18px] font-semibold'>Yayi</span>
           <p className='text-[14px] text-gray-200'>helo</p>
        </div>
      </div> 
      <div className='hover:bg-gray-700 flex items-center text-white p-[10px] cursor-pointer'>
        <img  src='./images/avatar.png' alt='' className='w-[50px] h-[50px]' />
        <div>
           <span className='text-[18px] font-semibold'>Yayi</span>
           <p className='text-[14px] text-gray-200'>helo</p>
        </div>
      </div> 
    </div>
  )
}
