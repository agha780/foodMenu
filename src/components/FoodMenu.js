import React from "react";
import foodItems from "./data";

function FoodMenu({ addToCart }) {
  return (
    <div>
      <h2>Food Menu</h2>
      {foodItems.map((foodItem) => (
        <div key={foodItem.id}>
          <h3>{foodItem.name}</h3>
          <p>Price: ${foodItem.price.toFixed(2)}</p>
          <button onClick={() => addToCart(foodItem)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
export default FoodMenu;
