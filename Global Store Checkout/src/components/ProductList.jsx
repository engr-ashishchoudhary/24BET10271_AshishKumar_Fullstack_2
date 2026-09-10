import { useCurrency } from "../context/CurrencyContext";

function ProductList() {
    const { formatPrice } = useCurrency();

    return (
        <div>
            <br />
            <h2>Product List</h2>
            <p><b>Wireless Headphones</b></p>
            <p>Price: {formatPrice(100)}</p>
            <br />
            
            <h2>Product List</h2>
            <p><b>Wireless Headphones</b></p>
            <p>Price: {formatPrice(100)}</p>
            <br />

            <h2>Product List</h2>
            <p><b>Wireless Headphones</b></p>
            <p>Price: {formatPrice(100)}</p>
            <br />
        </div>
        
    );
}

export default ProductList;