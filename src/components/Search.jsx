import React, {useState} from 'react';
import { collection, getDocs,getDoc, query, setDoc, where, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { useStateContext } from '../contexts/AuthContextProvider';



export const Search = () => {
   const [ username, setUsername ] = useState("")
   const [user,setUser] = useState(null)
   const [ error, setError ] = useState(false)


   const { currentUser } =  useStateContext();
  
    console.log({uid:currentUser.uid})
  
   const handleSelect = async () =>{
     const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
     
     try {
       const res = await getDoc(doc(db, "chats",combinedId))
        if(!res.exists()){
          await setDoc(doc(db,"chats",combinedId),{
            messages:[]
          });
          await updateDoc(doc(db,"userChats",currentUser.uid),{
            [combinedId+".userInfo"]:{
              uid:user.uid,
              displayName:user.displayName,
              photoURL:user.photoURL,
            },
            [combinedId+".date"]: serverTimestamp()
          })
          await updateDoc(doc(db, "userChats",user.uid),{
            [combinedId+".userInfo"]:{
              uid:currentUser.uid, 
              displayName:currentUser.displayName,
              photoURL:currentUser.photoURL,
            },
            [combinedId+".date"]: serverTimestamp()
          }) 

       
        }
      } catch (error) {
      
     }
     setUser(null);
     setUsername("");
    }

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
        <input
        value={username}
        onKeyDown={handleKey}  onChange={(e)=>setUsername(e.target.value)} type="search" placeholder='Find a user' className='placeholder:text-gray-200 outline-none bg-transparent  text-white' />
      </div>
      { user &&    
      <div  onClick={handleSelect} className='hover:bg-gray-900 flex items-center text-white p-[10px] cursor-pointer'>
        <img  src={user.photoURL} alt='' className='w-[45px] h-[45px] rounded-full' />
        <div>
           <span className='text-[18px] text-white font-semibold ml-4'>{user.displayName}</span>
        </div>
      </div> 
      }
      { error && <small>User not found</small>}
    </div>
  )
}
