import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "ASSIGN_USER":
//             return action.payload;
//         case "LOGOUT":
//             return null;
//         default:
//             return state;
//     }
// }
export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser]=useState(null)
    const checkUser=(user)=>{
     if(user){
        setCurrentUser(user);
     }
    }
   useEffect(()=>{
     const demo=onAuthStateChanged(auth, (user)=>{
        console.log("authentication changed")
        setCurrentUser(user)
        console.log(user)
     })
     return ()=>{
          demo();
     }
   },[currentUser]);
    // const [currentUser, dispatch] = useReducer(reducer, initialValue)
    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
}
