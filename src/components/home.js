import React from "react";

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
          <button>Order Now!</button>
          <button>See All Food</button>
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
