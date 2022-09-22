import { doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/AuthContextProvider'
import { db } from '../firebaseConfig'
import { Message } from "./Message"



export const Messages = () => {
  const [ messages, setMessages ] = useState([])
  const { data } = useStateContext(); 

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "userChats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
   });
  
    return () => {
      unsub();
    }
  }, [data.chatId])
  

  return (
    <div className="bg-gray-200 overflow-y-scroll p-[10px] h-[auto] ">
      
      {messages &&  messages.map((message)=>(
        <Message  message={message}/>
      ))}
    </div>
  )
}
