import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth } from '../firebaseConfig';


export const Register = () => {

 const handleSubmit = async(e)=>{
  e.preventDefault();
  const displayName = e.target[0].value;
  const email = e.target[1].value
  const password = e.target[2].value
  const file = e.target[3].files[0]
 
  console.log({email, password,file})

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
   
    const storage = getStorage();
const storageRef = ref(storage, 'images/rivers.jpg');

const uploadTask = uploadBytesResumable(storageRef, file); 
 uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  
  } catch (error) {
    
  }
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
    

 }
  

  return (
    <div className='bg-blue-200 h-[100vh] flex flex-col items-center justify-center'>
     <div className='flex gap-[10px] flex-col rounded-md py-[20px] px-[60px] justify-center items-center'>
        <span className='text-purple-600 font-bold text-[24px]'>Let's chat</span>
        <span className='text-[15px] text-purple-600'>Register</span>
     </div>
     <form className='flex flex-col gap-[15px]' onSubmit={handleSubmit}>
        <input type="text" placeholder='Display Name' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <input type="email" placeholder='Email' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <input type="password" placeholder='Password' className="p-[15px] border-none w-[250px] placeholder:text-gray-400 border-b-blue-200" />
        <input type="file" style={{display:"none"}}  id='avatar' />
        <label htmlFor="avatar" className='cursor-pointer flex  items-center'>
            <img src="./images/avatar.png" alt="" className='h-[4rem] w-[4rem] ' />
             <small>Add an Avatar</small>
        </label>
        <button className='bg-blue-500 p-[10px] font-bold cursor-pointer text-white' type="submit">Sign up</button>
     </form>
     <p className='text-gray-400 text-[15px] mt-[10px]'>You do have an account? login</p>
    </div>
  )
}
