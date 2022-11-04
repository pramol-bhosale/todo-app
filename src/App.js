
import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Loading from './components/Loading';
import { UserContext} from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const[flag, setFlag]=useState(0)
  const {currentUser} = useContext(UserContext)
  useEffect(()=>{
    setFlag(prev=> prev+1);
    console.log("authantication changed and now current user have content in it ")
     ProtectedRoute();
  },[currentUser]);
  console.log("before the protected route method call ");
  const ProtectedRoute =function (){
    console.log("in the protected route mehtod")
   
    console.log(currentUser)
       if(currentUser){
        console.log("from protected route with object")
        console.log(currentUser)
        return (
          <Home/>
        );
        
      }
      if(flag != 2){
        return (
          <Loading/>
        )
      }
      else{
        return (<Navigate to="/login"/>) 
      }
      console.log("from outside the protected route")
      console.log(currentUser)
      

  }

  console.log("after the protected route method")
  return (
    
        <BrowserRouter>
          <Routes>
            <Route path='/'>
                <Route index element={  <ProtectedRoute></ProtectedRoute>} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
    //</UserContextProvider>
  );
}

export default App;
