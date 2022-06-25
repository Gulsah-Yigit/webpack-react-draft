import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../utils/constants";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1
        style={{
          "text-align": "center",
        }}
      >
        Webpack Reactjs App with Scss
      </h1>
    </div>
  );
};

export default Home;
