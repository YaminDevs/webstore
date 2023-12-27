import './App.css'
import Header from './containers/Header.jsx'
import  MainSection from './containers/MainSection.jsx'
import { useEffect, useState } from 'react'

function App() {

  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [addToCart, setAddToCart] = useState([])
  

  useEffect(() => {
    const fetchDataMen = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/' + encodeURIComponent("men's clothing"));
        const data = await response.json();
        setMensClothing(data);
      } catch (error) {
        console.error('Error fetching mens clothing:', error);
      }
    };

    fetchDataMen();
  }, []);

  useEffect(() => {
    const fetchDataWomen = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/women\'s clothing');
        const data = await response.json();
        setWomensClothing(data);
      } catch (error) {
        console.error('Error fetching womens clothing:', error);
      }
    };

    fetchDataWomen();
  }, []);


  return (
    <>
      <Header addToCart={addToCart}/>
      <MainSection addToCart={addToCart} setAddToCart={setAddToCart} mensClothingData={mensClothing} womensClothingData={womensClothing}/>
    </>
  )
}

export default App
