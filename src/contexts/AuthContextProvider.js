import { onAuthStateChanged } from 'firebase/auth';
import React,{createContext, useEffect, useState,useContext, useReducer} from 'react'
import { auth } from '../firebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
   const [ currentUser, setCurrentUser] = useState();
   
   const INITIAL_STATE = {
      user:{},
      chatId:null,
   }

   const reducer = (state, action)=>{
      if(action.type === "CHANGE_USER"){
         return {
            user:action.payload,
            chatId:currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid : action.payload.uid + currentUser.uid
         }
      }

      return state
   }

   const [ state , dispatch] = useReducer(reducer,INITIAL_STATE)

   useEffect(() => {
    const unSub = onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
     })
   
     return () => {
        unSub();
     }
   }, [])
   
  return (
    <AuthContext.Provider value={
       {
        currentUser,
        data:state , 
        dispatch
       }
    }>
     {children}
    </AuthContext.Provider>
  )
}

export const useStateContext = ()=>useContext(AuthContext)