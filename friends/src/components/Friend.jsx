import React from "react";
import { Link } from "react-router-dom";

import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

import Post from "./Post";

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
        <div className="friend-info-cont">
          <h2>About {friendData.name}</h2>
          <h3>{friendData.age} Years Old</h3>
          <h3>{friendData.email}</h3>
        </div>
        <div className="friend-posts-cont">
          <h2>
            {friendData.name[friendData.name.length - 1] === "s"
              ? friendData.name
              : friendData.name + "s"}{" "}
            Posts
          </h2>
          <div className="posts-cont">
            {friendData.posts.length === 0 && (
              <h1 className="no-posts">{friendData.name} Has no posts</h1>
            )}
            {friendData.posts.map((post, index) => (
              <Post
                lastPost={index === friendData.posts.length - 1}
                key={index + post.title}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
