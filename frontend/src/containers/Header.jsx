import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import React, { useState } from "react";

const Header = () => {
    const [cartOpen, setCartOpen] = useState(true)
    return(
        <>
            <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
        </>
    )
}

export default Header