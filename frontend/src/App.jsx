import './App.css'
import Home from './containers/Home.jsx'
import { Route, Router, Routes } from 'react-router-dom'
import SignIn from './containers/SignIn.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>
      
    </>
  )
}

export default App
