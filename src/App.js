
import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { UserContext, UserContextProvider } from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const {currentUser} = useContext(UserContext)
  const ProtectedRoute = ({children})=>{
        console.log(currentUser)
       if(currentUser){
        console.log("from protected route with object")
        console.log(currentUser)
        return children;
        
      }
      console.log("from outside the protected route")
      console.log(currentUser)
      return (<Navigate to="/login"/>) 
  }
  return (
    
        <BrowserRouter>
          <Routes>
            <Route path='/'>
                <Route index element={  <ProtectedRoute> <Home/></ProtectedRoute>} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
    //</UserContextProvider>
  );
}

export default App;
