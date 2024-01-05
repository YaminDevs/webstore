import './App.css'
import Home from './containers/Home.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import SignIn from './containers/SignIn.jsx'
import Register from './containers/Register.jsx'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch('http://localhost:3000');
        const data = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    data();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </>
  )
}

export default App
