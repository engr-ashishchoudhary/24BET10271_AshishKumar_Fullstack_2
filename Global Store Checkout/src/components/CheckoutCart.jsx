import { useCurrency } from "../context/CurrencyContext";

function CheckoutCart() {
  const { formatPrice } = useCurrency();

  return (
    <div>
      <h2>Checkout Cart</h2>
      <p>Subtotal: {formatPrice(300)}</p>
    </div>
  );
}

export default CheckoutCart;