import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect,useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser]=useState(null)


    // currentUser context assigned when authentication changed
   useEffect(()=>{
     const demo=onAuthStateChanged(auth, (user)=>{
        setCurrentUser(user)
     })
     return ()=>{
          demo();
     }
   },[currentUser]);
  
    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
}
