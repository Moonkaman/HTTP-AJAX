import React from "react";
import { Link } from "react-router-dom";

import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

import Post from "./Post";

const EditFriend = props => {
  const friendData = props.friends.find(
    friend => String(friend.id) === props.match.params.friendId
  );

  if (friendData === undefined) return <h1>Friend Not Found</h1>;
  console.log(props);

  return (
    <form action="">
      <div className="friend-cont">
        <div className="friend-header">
          <Link to="/friends" className="back-to-friends">
            {"< Back to Profile"}
          </Link>
          <i className="fas fa-user-circle" />
          <input
            name="name"
            className="name-input"
            type="text"
            onChange={props.handleChange}
          />
        </div>
        <div className="friend-content">
          <div className="friend-info-cont">
            <h2>About {props.aFriend.name}</h2>
            <p className="input-label">Age</p>
            <input type="number" name="age" onChange={props.handleChange} />
            <p className="input-label">Email</p>
            <input type="text" name="email" onChange={props.handleChange} />
          </div>
          <div className="friend-posts-cont">
            <h2>
              {props.aFriend.name[props.aFriend.name.length - 1] === "s"
                ? props.aFriend.name
                : props.aFriend.name + "s"}{" "}
              Posts
            </h2>
            <div className="posts-cont">
              {friendData.posts.length === 0 && (
                <h1 className="no-posts">{props.aFriend.name} Has no posts</h1>
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
    </form>
  );
};

export default EditFriend;
