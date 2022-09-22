import React, { useState } from 'react'
import { useStateContext } from '../contexts/AuthContextProvider';
import { v4 as uuid } from "uuid"
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';




export const Input = () => {
   const[text,setText] =  useState("")
  const { currentUser,data} = useStateContext();
  const [ img, setImg ] = useState(null);

  const handleSend = async()=>{
    if(img){
        
  const storageRef = ref(storage, uuid());

  const uploadTask = uploadBytesResumable(storageRef, img); 
   uploadTask.on(
    (error) => {
      // setError(true);
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
        console.log('File available at', downloadURL);
        await updateDoc(doc(db,"chats",data.chatId),{
          messages:arrayUnion({
            id:uuid(),
            text,
            senderId:currentUser.uid,
            date:Timestamp.now(),
            img:downloadURL,
          })
        }) 
      });
    }
  );
    }
    else{
      await updateDoc(doc(db,"chats",data.chatId),{
        messages:arrayUnion({
          id:uuid(),
          text,
          senderId:currentUser.uid,
          date:Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db,"userChats",currentUser.uid),{
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId + ".date"]:serverTimestamp()
    })

    await updateDoc(doc(db,"userChats",data.user.uid),{
      [data.chatId + ".lastMessage"]:{
        text
      },
      [data.chatId + ".date"]:serverTimestamp()
    })
    setText("");
    setImg(null);
    console.log("send is pressed");
  }

  return (
    <div className='h-[50px] bg-white p-[10px] flex items-center justify-between'>
      <input  value={text} type="text" onChange={(e)=>setText(e.target.value)} placeholder="Type Something..." className=' grow-[9] border-none outline-none text-[18px]  text-gray-800 placeholder:text-gray-200' />
       <div className='flex items-center gap-[15px] justify-between grow-[1] '>
          <img className='h-[24px] cursor-pointer' src="./images/folder.png" alt="" />
          <input type="file" onChange={(e)=>setImg(e.target.files[0])} style={{display:"none"}} name="" id="file" value=""   />
          <label for="file">
            <img className='h-[24px] cursor-pointer' src="./images/imglogo.png" alt="" />
          </label>
           <button onClick={handleSend} type="button" className='b-none bg-[#8da4f1] px-[15px] py-[10px]'>Send</button>
       </div>
    </div>
  )
}
 