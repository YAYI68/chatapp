import React from 'react'

export const Register = () => {
  return (
    <div className='bg-blue-200 h-full flex items-center justify-center'>
     <div className='flex gap-[15px] rounded-md px-'>
        <span>Let's chat</span>
        <span className=''></span>
     </div>
     <form>
        <input type="text" className="" />
        <input type="email" className="" />
        <input type="password" className="" />
        <input type="file" className="" />
        <button type="submit">Sign up</button>
     </form>
     <p>You do have an account? login</p>
    </div>
  )
}
