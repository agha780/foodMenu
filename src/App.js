import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const menuItems = [
  { name: "Pizza", price: 10, imageUrl: "pizza.jpg" },
  { name: "Burger", price: 8, imageUrl: "burger.jpg" },
  { name: "Fries", price: 5, imageUrl: "fries.jpg" },
  { name: "Salad", price: 7, imageUrl: "salad.jpg" },
  { name: "Ice cream", price: 6, imageUrl: "ice_cream.jpg" },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [counterCart, setCounterCart] = useState(0);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity++;
      setCartItems(newCartItems);
      setTotalPrice(totalPrice + item.price);
    } else {
      const newItem = { ...item, quantity: 1 };
      const newCartItems = [...cartItems, newItem];
      setCartItems(newCartItems);
      setTotalPrice(totalPrice + item.price);
    }
    setIsCartOpen(true);
    setCounterCart(counterCart + 1);
  };

  const removeFromCart = (index) => {
    const itemToRemove = cartItems[index];
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    setTotalPrice(totalPrice - itemToRemove.price * itemToRemove.quantity);
    // Thats something im proud of, i mange to update the counter regarding how many itemToRemove.quantity.
    setCounterCart(counterCart - 1 * itemToRemove.quantity);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Menu</h1>{" "}
        <button onClick={toggleCart} className="fas fa-shopping-cart">
          <h className="counerCart">{counterCart}</h>
        </button>
        {isCartOpen === true ? (
          <div className="cart-container">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} (${item.price}) x {item.quantity}
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <p>Total: ${totalPrice}</p>
          </div>
        ) : null}
      </header>

      <div className="menu-container">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <h2>{item.name}</h2>
            <img
              src={process.env.PUBLIC_URL + "/" + item.imageUrl}
              alt={item.name}
            />
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
