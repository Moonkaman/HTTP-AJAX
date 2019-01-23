import React from "react";
import { Link } from "react-router-dom";

import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

const Friend = props => {
  const friendData = props.friends.find(
    friend => String(friend.id) === props.match.params.friendId
  );

  if (friendData === undefined) return <h1>Friend Not Found</h1>;

  return (
    <div className="friend-cont">
      <div className="friend-header">
        <Link to="/friends" className="back-to-friends">
          {"< Back to Friends"}
        </Link>
        <i className="fas fa-user-circle" />
        <h1>{friendData.name}</h1>
      </div>
      <div className="friend-content">
        <h2>Age: {friendData.age}</h2>
        <h3>Email: {friendData.email}</h3>
      </div>
    </div>
  );
};

export default Friend;
