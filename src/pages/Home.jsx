import React from "react";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="home_container">
      <div className="child">
        <h1>Webpack Reactjs App with Scss</h1>

        <h3>Using webpack as bundler</h3>
        <h3>Babel to transpile</h3>
        <h3>React-router-dom for routing</h3>
        <h3>Scss for styling</h3>
      </div>
    </div>
  );
};

export default Home;
