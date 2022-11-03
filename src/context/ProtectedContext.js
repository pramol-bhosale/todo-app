import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { UserContext } from "./UserContext";

export const ProtectedRoute=()=>{
const {currentUser}=useContext(UserContext);

if(currentUser){
  return (
    <Home/>
  );
}
else{
  return (
    <Login/>
  )
}



}