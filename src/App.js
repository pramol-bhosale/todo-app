
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
    ProtectedRoute();
  },[currentUser]);
 
  const ProtectedRoute =function (){
    console.log(currentUser)
       if(currentUser){
        console.log(currentUser)
        return (
          <Home/>
        );
        
      }
      if(flag != 2){
        console.log(flag)
        return (
          <Loading/>
        )
      }
      else{
        return (<Navigate to="/login"/>) 
      }
      

  }

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
  );
}

export default App;
