

export default function ProductCard({mensClothingData, setAddToCart}) {

    const handleAddToCart = (item) => {
        setAddToCart((prevCart) => [...prevCart, item]);
      };

    return(
        <>
            <ul className="grid grid-cols-3 gap-6 h-full">
                {mensClothingData.map((item) => (
                <li className='flex flex-col items-center ' key={item.id}>
                    <img src={item.image} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }}/>
                    <strong>{item.title}</strong>
                    <div className="flex justify-between mt-auto w-full">
                        <p className="mt-auto mr-auto">Price: ${item.price}</p>
                        <button className="border border-solid bg-beige-dark hover:bg-beige text-white rounded-md px-2 py-0.5 mt-auto" onClick={() => handleAddToCart(item)}>add to cart</button>
                    </div>
                </li>
                ))}
            </ul>
        </>
    )
}