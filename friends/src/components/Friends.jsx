import React from "react";

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
    </div>
  );
};

export default Friends;
