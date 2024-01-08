import './App.css'
import Home from './containers/Home.jsx'
import SignIn from './containers/SignIn.jsx'
import Register from './containers/Register.jsx'
import { useEffect, useState } from 'react'

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {page === 'home' ? (
        <Home setPage={setPage} />
      ) : page === 'register' ? (
        <div>
          <Register setPage={setPage} />
        </div>
      ) : page === 'signin' ? (
        <SignIn setPage={setPage}/>
      ) : (
        <div>Unknown page</div>
      )}
    </>
  );
}

export default App;
