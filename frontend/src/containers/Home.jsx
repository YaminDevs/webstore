import Footer from './Footer.jsx';
import Header from './Header.jsx'
import  MainSection from './MainSection.jsx'
import { useEffect, useState } from 'react'

function Home( { setPage } ) {

  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([])
  const [searchfield, setSearchfield] = useState('')
  const [addToCart, setAddToCart] = useState([])
  

  useEffect(() => {
    const fetchDataMen = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/men\'s clothing',{
          
        });
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
      <Header addToCart={addToCart} setAddToCart={setAddToCart} setPage={setPage} />
      <MainSection addToCart={addToCart} setAddToCart={setAddToCart} mensClothingData={mensClothing} womensClothingData={womensClothing}/>
      <Footer/>
    </>
  )
}

export default Home