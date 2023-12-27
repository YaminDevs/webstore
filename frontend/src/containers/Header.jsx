import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import React, { useState } from "react";

const Header = ({addToCart}) => {
    const [cartOpen, setCartOpen] = useState(false)
    return(
        <>
            <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart} />
        </>
    )
}

export default Header