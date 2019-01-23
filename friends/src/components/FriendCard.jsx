import React from "react";

const FriendCard = props => {
  return (
    <div className="friend-card">
      <h2>{props.friendData.name}</h2>
    </div>
  );
};

export default FriendCard;
