import React,{useState} from 'react'

export const Message = ({message}) => {
  const [ owner, setOwner] = useState(true);
  return (
    <div className={`flex gap-[20px] ${owner?'flex-row-reverse':'flex-row'}`}>
      <div className='flex flex-col text-gray-500 mb-[20px]'>
        <img className='w-[40px] object-cover h-[40px] rounded-full ' src="./images/avatar.png" alt="" />
        <span>Just now</span>
      </div>
      <div className={`${owner&&'items-end'} max-w-[80%] flex flex-col gap-[10px]`}>
        <p className={`${owner&&'bg-blue-500 text-white'} max-w-fit bg-white px-[20px] py-[10px] border-t-0 border-r-[10px] border-b-[10px] border-l-[10px]`}>hello</p>
        <img className='w-[50%]' src="./images/avatar.png" alt=""/>
      </div>
    </div>
  )
}
