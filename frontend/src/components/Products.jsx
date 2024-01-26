import React, { useEffect, useState } from 'react'

function Products() {

    const [products, setProducts] = useState([]);

    
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-3'>
    {products.map(product => (
      <div key={product.id} className='flex flex-col items-center'>
        <h2 className='h-12'>{product.name}</h2>
        <div className='w-40 h-40 flex justify-center'>
          <img src={`http://localhost:3000/${product.image}`} />
        </div>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    ))}
  </div>
  )
}

export default Products