import { onSnapshot, doc, } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/AuthContextProvider';
import { db } from '../firebaseConfig';


export const Chats = () => {
  
  const [ chats, setChats] = useState();
  const { currentUser,state,dispatch } = useStateContext();
  useEffect(() => {
    const getChats = ()=>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
       setChats(doc.data())
    });
    }
  
    currentUser.uid && getChats();

    return () => {
      getChats()
    }
  }, [currentUser.uid])
  
  const  handleSelect=(user)=>{
    dispatch({type:"CHANGE_USER",payload:user})
  } 

console.log(chats)
  return (
    <div>
      { chats && 
      <>
      {Object.entries(chats)?.sort((a,b)=>a[1].date - b[1].date)?.map((chat)=>(
      <div 
      className='hover:bg-gray-900 flex items-center text-white p-[10px] cursor-pointer'
       key={chat[0]}
       onClick={()=>handleSelect(chat[1].userInfo)}
      >
        <img  src={chat[1].userInfo.photoURL} alt='' className='w-[45px] h-[45px] mr-2 rounded-full' />
        <div>
           <span className='text-[18px] font-semibold'>{chat[1].userInfo.displayName}</span>
           <p className='text-[14px] text-gray-200'>{chat[1].lastMessage?.text}</p>
        </div>
      </div> 
      ))}
      </>  
      }
    </div>
  )
}
