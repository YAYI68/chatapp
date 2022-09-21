import React, {useState} from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebaseConfig';



export const Search = () => {
   const [ username, setUsername ] = useState("")
   const [user,setUser] = useState(null)
   const [ error, setError ] = useState(false)

  
   const handleSearch = async()=>{
    console.log(username)
    const q = query(collection(db, "users"), where("displayName", "==", username));
     try {    
       const querySnapshot = await getDocs(q);
           querySnapshot.forEach((doc) => {
            setUser(doc.data());
           })
     } catch (error) {
      setError(true)
     }  
        console.log(user)
   }

   const handleKey = (e)=>{
       e.code === "Enter"  && handleSearch();
   }

  return (
    <div className='border-b-2 border-b-gray-200'>
      <div className='p-[10px]'>
        <input onKeyDown={handleKey}  onChange={(e)=>setUsername(e.target.value)} type="search" placeholder='Find a user' className='placeholder:text-gray-200 outline-none bg-transparent  text-white' />
      </div>
    </div>
  )
}
