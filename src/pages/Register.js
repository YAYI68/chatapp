import React from 'react';

export const Register = () => {
  return (
    <div className='bg-blue-200 h-[100vh] flex flex-col items-center justify-center'>
     <div className='flex gap-[10px] flex-col rounded-md py-[20px] px-[60px] justify-center items-center'>
        <span className='text-purple-600 font-bold text-[24px]'>Let's chat</span>
        <span className='text-[15px] text-purple-600'>Register</span>
     </div>
     <form className='flex flex-col gap-[15px]'>
        <input type="text" placeholder='Display Name' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <input type="email" placeholder='Email' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <input type="password" placeholder='Password' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <input type="file" style={{display:"none"}}  id='avatar' />
        <label for="avatar" className='cursor-pointer flex  items-center'>
            <img src="./images/avatar.png" alt="" className='h-[4rem] w-[4rem] ' />
             <small>Add an Avatar</small>
        </label>
        <button className='bg-blue-500 p-[10px] font-bold cursor-pointer text-white' type="submit">Sign up</button>
     </form>
     <p className='text-gray-400 text-[15px] mt-[10px]'>You do have an account? login</p>
    </div>
  )
}
