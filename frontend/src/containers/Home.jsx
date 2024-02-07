import Footer from './Footer.jsx';
import Header from './Header.jsx'
import  MainSection from './MainSection.jsx'
import { useEffect, useState } from 'react'

function Home( { setPage, user } ) {

  const [products, setProducts] = useState([]);
  const [searchfield, setSearchfield] = useState('')
  const [addToCart, setAddToCart] = useState([])
  
  const getProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
};

useEffect(() => {
    // Call getProducts when the component mounts
    getProducts();
}, []);

  return (
    <>
      <Header addToCart={addToCart} setAddToCart={setAddToCart} setPage={setPage} user={user} />
      <MainSection addToCart={addToCart} setAddToCart={setAddToCart} products={products} />
      <Footer/>
    </>
  )
}

export default Home