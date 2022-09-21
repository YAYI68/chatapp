import React,{createContext, useState} from 'react'

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {


  return (
    <AuthContext.Provider value={
       {}

    }>
     {children}
    </AuthContext.Provider>
  )
}
