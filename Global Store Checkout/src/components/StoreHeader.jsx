import { useCurrency } from "../context/CurrencyContext";

function StoreHeader() {
    const { currency, changeCurrency } = useCurrency();

    return (
        <header>
            <h1>Global Store Checkout</h1>
            <h2>Select currency</h2>
            <button
                className={currency === "USD" ? "active" : ""}
                onClick={() => changeCurrency("USD")}
            >
                USD
            </button>
            
            <button
                className={currency === "EUR" ? "active" : ""}
                onClick={() => changeCurrency("EUR")}
            >
                EUR
            </button>

            <button
                className={currency === "GBP" ? "active" : ""}
                onClick={() => changeCurrency("GBP")}
            >
                GBP
            </button>

            <button
                className={currency === "JPY" ? "active" : ""}
                onClick={() => changeCurrency("JPY")}
            >
                JPY
            </button>
            
        </header>
    );
}

export default StoreHeader;