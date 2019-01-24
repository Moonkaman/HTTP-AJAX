import React from "react";
import { Link } from "react-router-dom";

import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

const FriendCard = props => {
  return (
    <div className="friend-card-flex">
      <Link to={`/friends/${props.friendData.id}`} className="friend-card">
        <h2>{props.friendData.name}</h2>
      </Link>
      <i
        className="fas fa-times"
        onClick={e => props.removeFriend(e, props.friendData.id)}
      />
      <div className="hover-elem" />
    </div>
  );
};

export default FriendCard;
