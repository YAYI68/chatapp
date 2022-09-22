import React, { useState } from 'react'
import { useStateContext } from '../contexts/AuthContextProvider';


export const Input = () => {
   const[text,setText] =  useState("")
  const { currentUser,data} = useStateContext();
  const [ img, setImg ] = useState(null);
  const [ file, setFile ] = useState();
  return (
    <div className='h-[50px] bg-white p-[10px] flex items-center justify-between'>
      <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Type Something..." className=' grow-[9] border-none outline-none text-[18px]  text-gray-800 placeholder:text-gray-200' />
       <div className='flex items-center gap-[15px] justify-between grow-[1] '>
          <img className='h-[24px] cursor-pointer' src="./images/folder.png" alt="" />
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}} name="" id="file" value=""   />
          <label for="file">
            <img className='h-[24px] cursor-pointer' src="./images/imglogo.png" alt="" />
          </label>
           <button type="button" className='b-none bg-[#8da4f1] px-[15px] py-[10px]'>Send</button>
       </div>
    </div>
  )
}
 