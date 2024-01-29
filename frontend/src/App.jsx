import './App.css'
import Home from './containers/Home.jsx'
import SignIn from './containers/SignIn.jsx'
import Register from './containers/Register.jsx'
import { useEffect, useState } from 'react'
import Dashboard from './containers/Dashboard.jsx'

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState({
      id: '',
      name: '',
      email: ''
  })

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,

    })
  }

  return (
    <>
      {page === 'home' ? (
        <Home setPage={setPage} />
      ) : page === 'register' ? (
        <div>
          <Register setPage={setPage} />
        </div>
      ) : page === 'signin' ? (
        <SignIn setPage={setPage} loadUser={loadUser} user={user}/>
      ) : page === 'dashboard' ?(
        <Dashboard setPage={setPage}/>
      ) :
        (
          <div>
            Page Not Found
          </div>
        )}
    </>
  );
}

export default App;
