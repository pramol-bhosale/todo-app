
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import { ProtectedRoute } from './context/ProtectedContext';
import { UserContextProvider } from './context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  
  return (
    <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
                <Route index element={  <ProtectedRoute> </ProtectedRoute>} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
