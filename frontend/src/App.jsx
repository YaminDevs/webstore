import './App.css'
import Home from './containers/Home.jsx'
import SignIn from './containers/SignIn.jsx'
import Register from './containers/Register.jsx'
import { useState, useEffect} from 'react'
import Dashboard from './containers/Dashboard.jsx'

function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState({
      id: '',
      name: '',
      email: '',
      created: '',
  })

  const loadUser = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3000/profile/${userId}`, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setUser(
            {
                id: data.id,
                name: data.name,
                email: data.email,
                created: data.created,
            }
        );
        console.log(data);
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
};

useEffect(() => {
    loadUser();
}, []);

  return (
    <>
      {page === 'home' ? (
        <Home setPage={setPage} user={user}/>
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
