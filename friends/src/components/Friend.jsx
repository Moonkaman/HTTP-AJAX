import React from "react";

const Friend = props => {
  const friendData = props.friends.find(
    friend => String(friend.id) === props.match.params.friendId
  );

  if (friendData === undefined) return <h1>Friend Not Found</h1>;

  return (
    <div>
      <h1>{friendData.name}</h1>
      <h2>Age: {friendData.age}</h2>
      <h3>Email: {friendData.email}</h3>
    </div>
  );
};

export default Friend;
