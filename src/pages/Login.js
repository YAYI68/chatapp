
import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value
   
    try {
    signInWithEmailAndPassword(auth, email, password)
    //  Navigate("/login")
    } catch (error) {
      
    }
  
   }
  return ( 
    <div className='bg-blue-200 h-[100vh] flex flex-col items-center justify-center'>
     <div className='flex gap-[10px] flex-col rounded-md py-[20px] px-[60px] justify-center items-center'>
        <span className='text-purple-600 font-bold text-[24px]'>Let's chat</span>
        <span className='text-[15px] text-purple-600'>Login</span>
     </div>
     <form onSubmit={handleSubmit} className='flex flex-col gap-[15px]'>
        
        <input type="email" placeholder='Email' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200 border-b-2" />
        <input type="password" placeholder='Password' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <button className='bg-blue-500 p-[10px] font-bold cursor-pointer text-white' type="submit">Sign in</button>
     </form>
     <p className='text-gray-400 text-[15px] mt-[10px]'>You don't have an account? Register</p>
    </div>
  )
}
