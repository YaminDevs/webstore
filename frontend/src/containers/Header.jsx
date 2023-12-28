import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import React, { useState } from "react";

const Header = ({addToCart, setAddToCart}) => {
    const [cartOpen, setCartOpen] = useState(false)
    return(
        <>
            <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} setAddToCart={setAddToCart} addToCart={addToCart}/>
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart} setAddToCart={setAddToCart} />
        </>
    )
}

export default Header