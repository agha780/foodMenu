import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";
import "@fortawesome/fontawesome-free/css/all.min.css";
const menuItems = [
  { name: "Pizza", price: 10, imageUrl: "pizza.jpg" },
  { name: "Burger", price: 8, imageUrl: "burger.jpg" },
  { name: "Fries", price: 5, imageUrl: "fries.jpg" },
  { name: "Salad", price: 7, imageUrl: "salad.jpg" },
  { name: "Ice cream", price: 6, imageUrl: "ice_cream.jpg" },
];

const Menu = () => {
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
    // setIsCartOpen(true);
    setCounterCart(counterCart + 1);
  };

  const removeFromCart = (index) => {
    const itemToRemove = cartItems[index];
    // Check if the item.quantity is bigger than 1
    // then bring all the arrays store them into newcartItem
    // then - = 1 to newCartItem, and then update the state.
    if (itemToRemove.quantity > 1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
      setTotalPrice(totalPrice - itemToRemove.price);
      setCounterCart(counterCart - 1);
    } else {
      const newCartItems = cartItems.filter((item, i) => i !== index);
      setCartItems(newCartItems);
      setTotalPrice(totalPrice - itemToRemove.price);
      setCounterCart(counterCart - 1);
    }
  };

  // old remove function that delete all the quantity
  // const removeFromCart = (index) => {
  //   const itemToRemove = cartItems[index];
  //   const newCartItems = […cartItems];
  //   newCartItems.splice(index, 1);
  //   setCartItems(newCartItems);
  //   setTotalPrice(totalPrice - itemToRemove.price * itemToRemove.quantity);
  //   itemToRemove.quantity.
  //   setCounterCart(counterCart - 1 * itemToRemove.quantity);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
        </Routes>

        <h1>Food Menu</h1>
        <button onClick={toggleCart} className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-counter">{counterCart}</span>
        </button>
        {isCartOpen === true ? (
          <div className="cart-container">
            <div className="cart-header">
              <h2>Cart</h2>
              <button onClick={toggleCart}>Close</button>
            </div>
            {cartItems.length > 0 ? (
              <ul className="cart-items">
                {cartItems.map((item, index) => (
                  <li key={index} className="cart-item">
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-cart">Your cart is empty.</p>
            )}
            <p className="total-price">Total: ${totalPrice}</p>
            <button className="checkout-button">Checkout</button>
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
              className="item-image"
            />
            <p className="item-price">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
