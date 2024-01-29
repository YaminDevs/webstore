import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function MainSection({products, setAddToCart}) {
    return(
        <> 
            <Banner/>
            <ProductList products={products} setAddToCart={setAddToCart} />
        </>
    )
}