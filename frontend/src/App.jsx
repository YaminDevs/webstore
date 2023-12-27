import './App.css'
import Header from './containers/Header.jsx'
import  MainSection from './containers/MainSection.jsx'
import { useEffect, useState } from 'react'

function App() {

  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([])
  const [searchfield, setSearchfield] = useState('')
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/' + encodeURIComponent("men's clothing"));
        const data = await response.json();
        setMensClothing(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching mens clothing:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/' + encodeURIComponent("women's clothing"));
        const data = await response.json();
        setWomensClothing(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching mens clothing:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Header/>
      <MainSection/>
    </>
  )
}

export default App
