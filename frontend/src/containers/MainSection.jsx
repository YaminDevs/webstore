import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

export default function MainSection({mensClothingData, setAddToCart}) {
    return(
        <> 
            <Banner/>
            <ProductList mensClothingData={mensClothingData} setAddToCart={setAddToCart}/>
        </>
    )
}