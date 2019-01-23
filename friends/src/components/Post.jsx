import React from "react";

const Post = props => {
  return (
    <div className={props.lastPost ? "post-cont lastpost" : "post-cont"}>
      <h2>{props.post.title}</h2>
      <p>{props.post.body}</p>
    </div>
  );
};

export default Post;
