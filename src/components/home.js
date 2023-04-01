import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-image">
        <img src="/img7.png" alt="Delicious food" />
      </div>
      <div className="landing-page-text">
        <h1>
          <span style={{ color: "#f25656", textTransform: "uppercase" }}>
            Hungry?
          </span>
          {""} just wait, food at
          <span style={{ color: "#f25656" }}> your door</span>
        </h1>
        <div className="landing-page-buttons">
          <Link to="/menu" className="buttonLanding">
            Order Now!
          </Link>
          <Link className="buttonLanding" to="/menu">
            See All Food
          </Link>
          {/* <div className="landingIcon">
            <span>No shipping charge</span>
            <span>100% secure checkout</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
