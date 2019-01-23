import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>My Home</h1>
      <Link to="/friends">
        <button>Veiw My Friends</button>
      </Link>
    </div>
  );
};

export default Home;
