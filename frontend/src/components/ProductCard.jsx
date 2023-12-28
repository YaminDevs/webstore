

export default function ProductCard({mensClothingData, womensClothingData, setAddToCart, sortedData}) {

    const handleAddToCart = (item) => {
        setAddToCart((prevCart) => [...prevCart, item]);
      };

    const data = [...mensClothingData, ...womensClothingData]
    return(
        <>
            <div className="bg-white">
                <div className="mx-auto">  
                    <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:gap-x-8 justify-center">
                        {data.map((item) => (
                            <li className='flex flex-col items-center p-4' key={item.id}>
                                <a className="group flex flex-col h-full">
                                    <div className="aspect-h-1 aspect-w-1 flex justify-center overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-52 object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between text-center">
                                        <div>
                                            <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium mt-2 text-gray-900">{item.price.toFixed(2)}€</p>
                                            <button onClick={() => handleAddToCart(item)}>add</button>
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