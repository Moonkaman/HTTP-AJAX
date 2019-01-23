import React from "react";

import FriendCard from "./FriendCard";

const Friends = props => {
  return (
    <div>
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
