import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import React, { useState } from "react";

const Header = ({addToCart, setAddToCart, setPage, user }) => {
    const [cartOpen, setCartOpen] = useState(false)
    return(
        <>
            <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} setAddToCart={setAddToCart} addToCart={addToCart} setPage={setPage} user={user}/>
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} addToCart={addToCart} setAddToCart={setAddToCart} />
        </>
    )
}

export default Header