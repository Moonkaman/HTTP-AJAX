import React from "react";
import { Link } from "react-router-dom";

const FriendCard = props => {
  return (
    <Link to={`/friends/${props.friendData.id}`} className="friend-card">
      <h2>{props.friendData.name}</h2>
    </Link>
  );
};

export default FriendCard;
