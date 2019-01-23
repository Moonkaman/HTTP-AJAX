import React from "react";
import { Link } from "react-router-dom";

const FriendCard = props => {
  return (
    <Link to={`/friends/${props.friendData.id}`} className="friend-card">
      <h2>{props.friendData.name}</h2>
      <div className="hover-elem" />
    </Link>
  );
};

export default FriendCard;
