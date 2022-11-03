import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { UserContext } from "./UserContext";


export const AuthContext=createContext();
export const AuthContextProvider =({children})=>{
    const {currentUser,dispatch}=useContext(UserContext);
    useEffect(()=>{
        console.log("from auth context");
    const onSub=onAuthStateChanged(auth, (user)=>{
       dispatch({
       type:"USER_CHANGE",
       payload: user
       })
    })
    return ()=>{
     onSub();
    }

},[]);

return (
   <AuthContext.Provider value={{name:"pramol"}}>
   {children}
   </AuthContext.Provider>

);

}