import React from "react";
import { Link } from "react-router-dom";

import FriendCard from "./FriendCard";

import "./Friends.css";

const Friends = props => {
  return (
    <div className="friends-list-cont">
      <h1>My Friends</h1>
      <div className="friend-cont">
        {props.friends.map(friend => (
          <FriendCard friendData={friend} key={friend.id} />
        ))}
      </div>
      <Link to="/add-friend">
        <button className="add-friend-btn">
          Add New Friend <i className="fas fa-user-plus" />
        </button>
      </Link>
    </div>
  );
};

export default Friends;
