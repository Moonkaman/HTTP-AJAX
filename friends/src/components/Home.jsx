import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-cont">
      <h1>My Home</h1>
      <Link to="/friends">
        <button>Veiw My Friends</button>
      </Link>
    </div>
  );
};

export default Home;
