import React from "react";
import "./AboutUs.css";
const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-heading">
        <h1>About Our Restaurant</h1>
        <p>
          We are a family-owned restaurant serving delicious food since 1990.
        </p>
      </div>
      <div className="about-us-content">
        <div className="about-us-section">
          <h2>Our Food Menu</h2>
          <p>
            We offer a wide range of dishes, from classic American burgers to
            authentic Italian pasta. All of our dishes are made with fresh,
            high-quality ingredients, and are cooked to perfection by our
            skilled chefs.
          </p>
          <p>
            Our menu includes vegetarian and gluten-free options, so everyone
            can enjoy our food. We also have a kids menu with smaller portions
            and simpler dishes for the little ones.
          </p>
        </div>
        <div className="about-us-section">
          <h2>American Burger Menu</h2>
          <p>
            Our American burger menu features juicy beef patties cooked to your
            liking, served on a fresh bun with your choice of toppings. We have
            classic toppings like lettuce, tomato, and onion, as well as more
            unique options like avocado, jalapenos, and fried egg.
          </p>
          <p>
            All of our burgers are served with a side of fries or onion rings,
            and we offer a variety of dipping sauces to add even more flavor to
            your meal.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Pasta Italian Menu</h2>
          <p>
            Our Pasta Italian menu includes a variety of classic Italian dishes,
            from spaghetti carbonara to lasagna. All of our pasta dishes are
            made with homemade sauces and fresh pasta, cooked al dente to
            perfection.
          </p>
          <p>
            We also offer a selection of Italian wines to pair with your meal,
            as well as traditional Italian desserts like tiramisu and cannoli.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
