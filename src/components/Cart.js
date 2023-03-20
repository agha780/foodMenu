import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Cart;
