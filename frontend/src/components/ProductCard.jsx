import { useEffect } from "react";

export default function ProductCard({setAddToCart, products }) {
    const handleAddToCart = (product) => {
        setAddToCart((prevCart) => [...prevCart, product]);
      };


    return(
        <>
            <div className="bg-white">
                <div className="mx-auto">  
                    <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8 justify-center">
                        {products.map((product) => (
                            <li className='flex flex-col items-center p-4' key={product.id}>
                                <a className="group flex flex-col h-full">
                                    <div className="aspect-h-1 aspect-w-1 flex justify-center overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={`http://localhost:3000/${product.image}`} 
                                            alt={product.title}
                                            className="h-52 object-cover object-center group-hover:opacity-75 cursor-pointer"
                                            onClick={() => handleAddToCart(product)}
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between text-center">
                                        <div>
                                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium mt-2 text-gray-900">{product.price}$</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}