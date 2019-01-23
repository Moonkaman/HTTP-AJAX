import React from "react";
import { Link } from "react-router-dom";

import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

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
          <h2>{friendData.name} Posts</h2>
          <div className="fake-post">
            <h3>I found a cool thing...</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ducimus perferendis doloremque aliquid, fugit soluta atque dolores
              corrupti in. Quos quibusdam, ex nostrum similique officia iste
              temporibus deleniti eveniet dicta. Cum ut error eos aperiam
              voluptatibus repellat est repudiandae, ipsam placeat tenetur
              dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias
              veniam fuga sit quibusdam itaque animi reprehenderit obcaecati
              quisquam adipisci dolorem velit maxime, nihil sint quaerat libero
              iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae
              necessitatibus expedita iusto quas ducimus vero suscipit commodi
              doloribus, voluptas explicabo dicta perferendis, aut nobis sunt
              libero unde blanditiis quis repellendus obcaecati. Unde, magnam.
            </p>
          </div>
          <div className="fake-post">
            <h3>I can't believe I never heard about this.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ducimus perferendis doloremque aliquid, fugit soluta atque dolores
              corrupti in. Quos quibusdam, ex nostrum similique officia iste
              temporibus deleniti eveniet dicta. Cum ut error eos aperiam
              voluptatibus repellat est repudiandae, ipsam placeat tenetur
              dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias
              veniam fuga sit quibusdam itaque animi reprehenderit obcaecati
              quisquam adipisci dolorem velit maxime, nihil sint quaerat libero
              iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae
              necessitatibus expedita iusto quas ducimus vero suscipit commodi
              doloribus, voluptas explicabo dicta perferendis, aut nobis sunt
              libero unde blanditiis quis repellendus obcaecati. Unde, magnam.
            </p>
          </div>
          <div className="fake-post lastpost">
            <h3>Hey guys where am I?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              ducimus perferendis doloremque aliquid, fugit soluta atque dolores
              corrupti in. Quos quibusdam, ex nostrum similique officia iste
              temporibus deleniti eveniet dicta. Cum ut error eos aperiam
              voluptatibus repellat est repudiandae, ipsam placeat tenetur
              dignissimos sunt! Enim sapiente rerum, dignissimos possimus alias
              veniam fuga sit quibusdam itaque animi reprehenderit obcaecati
              quisquam adipisci dolorem velit maxime, nihil sint quaerat libero
              iste numquam! Labore, aliquam sapiente? Nam eos velit repudiandae
              necessitatibus expedita iusto quas ducimus vero suscipit commodi
              doloribus, voluptas explicabo dicta perferendis, aut nobis sunt
              libero unde blanditiis quis repellendus obcaecati. Unde, magnam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
