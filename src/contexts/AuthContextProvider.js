import { onAuthStateChanged } from 'firebase/auth';
import React,{createContext, useEffect, useState,useContext} from 'react'
import { auth } from '../firebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
   const [ currentUser, setCurrentUser] = useState();


   useEffect(() => {
    const unSub = onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        console.log({user})
     })
   
     return () => {
        unSub();
     }
   }, [])
   
  return (
    <AuthContext.Provider value={
       {
        currentUser,
       }
    }>
     {children}
    </AuthContext.Provider>
  )
}

export const useStateContext = ()=>useContext(AuthContext)